import { Project } from './project';
import { ProjectStatus } from './project-status';
import { DocumentType } from './document-type';

export class ProjectType{
  id?: number;
  name?: string;
  projects?: Project[];
  projectStatuses?: ProjectStatus[];
  documentTypes?: DocumentType[];

  constructor(name?: string, projects?: Project[], projectStatuses?: ProjectStatus[], documentTypes?: DocumentType[], id?: number){
    this.id = id;
    this.name =  name;
    this.projects = projects;
    this.projectStatuses = projectStatuses;
    this.documentTypes = documentTypes;
  }
}
