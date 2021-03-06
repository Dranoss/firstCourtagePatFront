import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadFilesService } from 'src/app/shared/services/upload-files/upload-files.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Document } from 'src/app/shared/core/classes/document';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { ProjectTypeService } from 'src/app/shared/services/project-type/project-type.service';
import { ProjectStatusService } from 'src/app/shared/services/project-status/project-status.service';
import { Project } from 'src/app/shared/core/classes/project';
import { User } from 'src/app/shared/core/classes/user';
import { ProjectStatus } from 'src/app/shared/core/classes/project-status';
import { ProjectType } from 'src/app/shared/core/classes/project-type';

@Component({
  selector: 'apa-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private projectService: ProjectService,
    private projectTypeService: ProjectTypeService,
    private projectStatusService: ProjectStatusService,
    private uploadService: UploadFilesService,
  ) { }

  // GET FROM URL
  projectId: number;
  userId: number;

  project: Project; // Project display
  projectModel: Project; // Project used in form
  user: User; // Use to diaplay the name
  projectStatus: ProjectStatus;
  projectType: ProjectType;
  projectTypes: ProjectType[] = [];
  newProjectType: ProjectType;
  projectStatuses: ProjectStatus[] = [];
  newProjectStatus: ProjectStatus;
  progress: number;

  selectedFiles: FileList;
  currentFile: File;
  message = '';

  fileInfos: Observable<any>;

  userRole;
  displayForm = false;


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.projectId = +paramMap.get('id');
      if (localStorage.getItem('userRole') === 'admin'){
        this.userId = +paramMap.get('userId');
      } else {
        this.userId = +localStorage.getItem('userId');
      }
      this.getProjectById(this.projectId);
      this.getUserById(this.userId);
      this.getAllProjectTypes();
      this.getAllProjectStatuses();
      this.initialiszeUserRole();
    });
  }

  initialiszeUserRole(){
    return this.userRole = localStorage.getItem('userRole');
  }

  getProjectById(id){
    this.projectService.getProjectById(id).subscribe(data => {
      this.project = data;
      this.projectModel = data;
      this.getProjectStatusById(this.project.projectStatus);
      this.getProjectTypeById(this.project.projectType);
      console.log(this.project)
    });
  }

  getProjectStatusById(id){
    this.projectStatusService.getProjectStatusById(id).subscribe((data) => {
      this.projectStatus = data;
      this.projectModel.projectStatus = data;
    });
  }

  getProjectTypeById(id){
    this.projectTypeService.getProjectTypeById(id).subscribe((data) => {
      this.projectType = data;
      this.projectModel.projectType = data;
      this.projectModel.projectType.projectStatuses.sort((a, b) => {
        return a.ranking - b.ranking;
      });
      this.calculateProgress();
    });
  }

  getUserById(id: number){
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data;
    });
  }

  toggleDisplayForm(){
    return this.displayForm = ! this.displayForm;
  }

  displayDocumentIcon(document){
    return document.url ? true : false
  }

  calculateProgress(){
    return this.progress = Math.floor((this.project.projectStatus.ranking / this.project.projectType.projectStatuses.length) * 10000) / 100;
  }

  // FORM
  getAllProjectTypes(){
    this.projectTypeService.getAllProjectTypes().subscribe(data => {
      this.projectTypes = data;
    });
  }

  getAllProjectStatuses(){
    this.projectStatusService.getAllProjectStatuses().subscribe(data => {
      this.projectStatuses = data;
    });
  }

  selectNewProjectType(id){
    this.newProjectType = this.projectTypes.find(x => x.id === +id);
    this.projectModel.projectType = this.newProjectType;
  }

  selectNewProjectStatus(id){
    this.newProjectStatus = this.projectStatuses.find(x => x.id === +id);
    this.projectModel.projectStatus = this.newProjectStatus;
  }

  onSubmit(){
    this.projectModel.projectStatus = {id: this.projectModel.projectStatus.id};
    this.projectModel.projectType = {id: this.projectModel.projectType.id};
    this.projectModel.user = {id: this.user.id};
    this.projectModel.creationDate = new Date(this.projectModel.creationDate);
    this.projectModel.documents = [];
    this.projectService.putProjectById(this.projectModel).subscribe(() => {
      this.getProjectById(this.projectId);
      this.resetForm();
    });
  }

  resetForm(){
    this.getProjectById(this.projectId);
    this.toggleDisplayForm();
  }


  selectFile(event, document) {
    this.selectedFiles = event.target.files;
    this.upload(document)
  }

  upload(document: Document){
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    let blob = this.currentFile.slice(0, this.currentFile.size, this.currentFile.type)
    let newFile = new File([blob], document.name + "_" + document.id.toString(), {type: this.currentFile.type})
    this.uploadService.upload(newFile, document).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  downloadFile(document: Document){
    return this.uploadService.download(document).subscribe(data => {
      const blob = new Blob([data.body], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  } 
}

