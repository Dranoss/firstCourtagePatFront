
import { TypeProject } from './typeProject';
import { User } from './user';
import { Documentt } from './documentt';
import { ProjectStatus } from './projectStatus';

export class Project {
  id: number;
  name: string;
  amount: number;
  dateOpened: Date;
  dateClosed: Date;
  typeProject: TypeProject;
  user: User;
  documents : Documentt[];
  projectStatus : ProjectStatus;

  constructor() {
  }

}
