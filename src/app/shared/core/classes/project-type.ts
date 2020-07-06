import { Project } from './project';
import { ProjectStatus } from './project-status';

export class ProjectType{
  id?: number;
  name: string;
  projects?: Project;
  projectStatuses?: ProjectStatus;
  documentTypes?: DocumentType;
}
