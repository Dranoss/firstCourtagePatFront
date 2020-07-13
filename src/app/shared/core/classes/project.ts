
import { TypeProject } from './typeProject';
import { User } from './user';

import { Documentt } from './documentt';
import { Projectstatus } from './projectstatus.';

export class Project {
  id?: number;
  name: string;
  amount: number;
  dateOpened: Date;
  dateClosed: Date;
  typeProject: TypeProject;
  documents : Documentt[];
  projectStatus : Projectstatus;
  user : User;

  constructor(
    name: string,
    amount: number,
    dateOpened: Date,
    dateClosed: Date,
    typeProject: TypeProject,
    documents : Documentt[],
    projectStatus : Projectstatus,
    user: User,
    id?: number) {
      this.user = user;
      this.id= id;
      this.name= name;
      this.amount = amount;
      this.dateClosed = dateClosed;
      this.dateOpened =dateOpened;
      this.projectStatus = projectStatus;
      this.typeProject = typeProject;
      this.documents = documents;
    }

}
