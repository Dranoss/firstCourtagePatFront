import { Projectstatus } from './projectstatus.';

export class TypeProject {
  public id?: number;
  public name: string;
  public projectStatuses: Projectstatus[];
  constructor(name: string,  projectStatuses: Projectstatus[],id?: number) {

    this.projectStatuses = projectStatuses;
    this.id = id;
    this.name = name;
  }
}
