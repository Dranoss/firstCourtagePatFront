import { Project } from './project';
import { TypeProject } from './typeProject';

export class ProjectStatus {
  id : number;
  projects : Project[];
  projectType : TypeProject[];
  name : String;
  ranking : number;

}
