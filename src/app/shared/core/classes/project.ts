

import { User } from './user';

import { Documentt } from './documentt';
import { Projectstatus } from './projectstatus.';
import { TypeProject } from './typeProject';
import { Docuser } from './docuser';

export class Project {
  id?: number;
  name: string;
  amount: number;
  creationDate: Date;
  closingDate: Date;
  projectType: TypeProject;
  documents : Docuser[];
   projectStatus : Projectstatus;
  user : User;


  constructor(
    name: string,
    amount: number,
    creationDate: Date,
    closingDate: Date,
    projectType: TypeProject,
    documents : Docuser[],
    projectStatus : Projectstatus,
    user: User,
    id?: number) {
      this.user = user;
      this.id= id;
      this.name= name;
      this.amount = amount;
      this.closingDate = closingDate;
      this.creationDate =creationDate;
      this.projectStatus = projectStatus;
      this.projectType =  projectType;
      this.documents = documents;
    }

}
