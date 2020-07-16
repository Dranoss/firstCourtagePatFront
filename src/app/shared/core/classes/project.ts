
import { TypeProject } from './typeProject';
import { User } from './user';

import { Documentt } from './documentt';
import { ProjectStatus } from './projectStatus';

export class Project {
  id?: number;
  name: string;
  amount: number;
  dateOpened: Date;
  dateClosed: Date;
  typeProject: TypeProject;
  documents : Documentt[];
  projectStatus : ProjectStatus | number;

  constructor(
    name: string,
    amount: number,
    dateOpened: Date,
    dateClosed: Date,
    typeProject: TypeProject,
    projectStatus: ProjectStatus,
    id?: number) {

      this.id= id;
      this.name= name;
      this.amount = amount;
      this.dateClosed = dateClosed;
      this.dateOpened =dateOpened;
      this.projectStatus = projectStatus;
      this.typeProject = typeProject;
  }

}
