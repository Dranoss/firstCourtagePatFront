import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/core/classes/project';
import { ProjectTypeService } from '../../shared/services/project-type/project-type.service';
import { ProjectType } from '../../shared/core/classes/project-type';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/core/classes/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../../shared/core/classes/document';
import { ProjectService } from '../../shared/services/project/project.service';

@Component({
  selector: 'apa-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {
  // CREATE FORM MODEL
  projectModel: Project;

  // INITIALIZE OBJECT TO GET DATA FROM BACKEND
  projectTypes: ProjectType[] = [];
  selectedUser: User;

  // COLLECT THE URL PARAMETER
  selectedUserId: number;
  selectedUserType: string;

  selectedProjectType: ProjectType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectTypeService: ProjectTypeService,
    private userService: UserService,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.selectedUserId = +paramMap.get('userId');
      this.selectedUserType = paramMap.get('userType');
      this.initializeProjectType();
      this.initializeUser(this.selectedUserId);
    });
  }

  resetForm(){
    return this.projectModel = {
      name: '',
      projectType: {name: ''},
      projectStatus: {name: '', ranking: 0},
      amount: 0,
      creationDate: new Date(Date.now()),
      documents: [],
      user: this.selectedUser,
    };
  }
  initializeProjectType(){
    this.projectTypeService.getAllProjectTypes().subscribe(data => {
      this.projectTypes = data;
    });
  }
  initializeUser(id){
    this.userService.getUserById(id).subscribe(data => {
      this.selectedUser = data;
      this.resetForm();
    });
  }
  selectProjectType(projectType){
    this.projectModel.projectType = projectType;
    this.projectModel.projectStatus = projectType.projectStatuses.sort((a, b) => {
      return a.ranking - b.ranking;
    })[0];
  }
  selectStatus(statusId){
    this.projectModel.projectStatus = this.projectModel.projectType.projectStatuses.find(x => {
      return x.id === +statusId;
    });
  }
  onSubmit(){
    const newProject: Project = {
      name: this.projectModel.name,
      amount: this.projectModel.amount,
      projectType: {id: this.projectModel.projectType.id},
      creationDate: this.projectModel.creationDate,
      closingDate: new Date(this.projectModel.closingDate),
      projectStatus: {id: this.projectModel.projectStatus.id},
      user: {id: this.projectModel.user.id},
      documents: [],
    };
    this.projectModel.projectType.documentTypes.forEach(element => {
      newProject.documents.push({name: element.name, url: '', documentType: {id: element.id}});
    });
    this.projectService.postProject(newProject).subscribe(() => {
    this.router.navigate([`/client-projects/${this.selectedUserId}`]);
    });
  }
}
