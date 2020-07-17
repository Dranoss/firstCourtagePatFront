import { TypeProject } from './typeProject';
import { Project } from './project';

export class Projectstatus {
id?: number;
name: string;
ranking: number;
projectType: TypeProject;


constructor(  name: string,
  ranking: number,
  projectType: TypeProject,
  id?: number){

    this.id = id;
    this.name = name;
    this.ranking= ranking;
    this.projectType= projectType;
  }

}
