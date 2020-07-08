import { TypeProject } from './typeProject';
import { User } from './user';
import { Projectstatus } from './projectstatus.';

export class Project {
  id?: number;
  name: string;
  amount: number;
  dateOpened: Date;
  dateClosed: Date;
  typeProject: TypeProject;
  statusProject: Projectstatus;


  constructor(
    name: string,
    amount: number,
    dateOpened: Date,
    dateClosed: Date,
    typeProject: TypeProject,
    statusProject: Projectstatus,
    id?: number) {

      this.id= id;
      this.name= name;
      this.amount = amount;
      this.dateClosed = dateClosed;
      this.dateOpened =dateOpened;
      this.statusProject = statusProject;
      this.typeProject = typeProject;
  }

}
