import { Projectstatus } from './projectstatus.';

export class TypeProject {
  public id?: number;
  public name: string;
  public projectStatus: Projectstatus[];
  constructor(name: string,  projectStatus: Projectstatus[],id?: number) {

    this.projectStatus = projectStatus;
    this.id = id;
    this.name = name;
  }
}
