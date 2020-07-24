import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../../shared/core/classes/project-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectTypeService } from '../../shared/services/project-type/project-type.service';
import { ProjectStatus } from '../../shared/core/classes/project-status';
import { DocumentType } from '../../shared/core/classes/document-type';
import { DocumentTypeService } from '../../shared/services/document-type/document-type.service';
import { ProjectStatusService } from '../../shared/services/project-status/project-status.service';

@Component({
  selector: 'apa-project-type-creation',
  templateUrl: './project-type-creation.component.html',
  styleUrls: ['./project-type-creation.component.scss']
})
export class ProjectTypeCreationComponent implements OnInit {
  projectTypeModel: ProjectType = {name: '', };
  projectTypeId: number;
  projectStatuses = [];
  documentTypes = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectTypeService: ProjectTypeService,
    private documentTypeService: DocumentTypeService,
    private projectStatusService: ProjectStatusService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.projectTypeId = +paramMap.get('id');
      this.initializeProjectTypeToUpdate(this.projectTypeId);
    });
  }
  initializeProjectTypeToUpdate(id: number){
    if (id){
      this.projectTypeService.getProjectTypeById(id).subscribe(data => {
        this.projectTypeModel = data;
        this.projectStatuses = this.projectTypeModel.projectStatuses;
        this.projectStatuses = this.projectStatuses.sort((a, b) => {
          return a.ranking - b.ranking;
        });
        this.documentTypes = this.projectTypeModel.documentTypes;
      });
    } else {
      this.projectTypeModel = {name: ''};
    }
  }

  onSubmit(){
    this.projectTypeModel.documentTypes = this.documentTypes;
    this.projectTypeModel.projectStatuses = this.projectStatuses;
    if (this.projectTypeId){
      this.projectTypeService.putProjectTypeById({id: this.projectTypeModel.id, name: this.projectTypeModel.name}).subscribe(() => {
        this.projectTypeModel.projectStatuses.forEach(projectStatus => {
          if (projectStatus.id){
            this.projectStatusService.putProjectStatusById({
              id: projectStatus.id,
              name: projectStatus.name,
              ranking: projectStatus.ranking
            }).subscribe();
          } else {
            this.projectStatusService.postProjectStatus({
              name: projectStatus.name,
              ranking: projectStatus.ranking,
              projectType: {id: this.projectTypeModel.id}
            }).subscribe();
          }
        });
        this.projectTypeModel.documentTypes.forEach(documentType => {
          if (documentType.id){
            this.documentTypeService.putDocumentTypeById({id: documentType.id, name: documentType.name}).subscribe();
          } else {
            this.documentTypeService.postDocumentType({name: documentType.name, projectType: {id: this.projectTypeModel.id}}).subscribe();
          }
        });
        this.resetForm();
        this.router.navigate([`/project-types`]);
      });
    } else {
      this.projectTypeService.postProjectType(this.projectTypeModel).subscribe(() => {
        this.resetForm();
        this.router.navigate([`/project-types`]);
      });
    }
  }
  resetForm(){
    this.projectTypeModel = {name: ''};
    this.initializeProjectTypeToUpdate(this.projectTypeId);
  }
  arrayLength(array){
    if (array != null){
      return array.length;
    }
  }
  addDocumentType(){
    this.documentTypes.push({name: ''});
    this.projectTypeModel.documentTypes = this.documentTypes;
    return this.documentTypes;
  }
  addProjectStatus(){
    this.projectStatuses.push({name: ''});
    this.projectTypeModel.projectStatuses = this.projectStatuses;
    return this.projectStatuses;
  }
  deleteDocumentType(element){
    if (element.id) {
      this.documentTypeService.deleteDocumentTypeById(element.id).subscribe(() => {
        this.initializeProjectTypeToUpdate(this.projectTypeId);
      });
    } else {
      const index = this.documentTypes.findIndex(document => {
        return element.name === document.name;
      });
      this.documentTypes.splice(index, 1);
    }
  }
  deleteProjectStatus(element){
    if (element.id){
      this.projectStatusService.deleteProjectStatusById(element.id).subscribe(() => {
        this.initializeProjectTypeToUpdate(this.projectTypeId);
      });
    } else {
      const index = this.projectStatuses.findIndex(status => {
        return element.name === status.name;
      });
      this.projectStatuses.splice(index, 1);
    }
  }
}
