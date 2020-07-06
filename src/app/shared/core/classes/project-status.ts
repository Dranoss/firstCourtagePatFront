import { ProjectType } from './project-type';
import { Project } from './project';

export class ProjectStatus{
  id?: number;
  name: string;
  ranking: number;
  projectType: ProjectType;
  projects?: Project;

  constructor(name: string, ranking: number, projectType: ProjectType, id?: number){
    this.id = id;
    this.name = name;
    this.ranking = ranking;
    this.projectType = projectType;
  }
}
