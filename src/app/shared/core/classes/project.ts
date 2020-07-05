import { TypeProject } from './typeProject';
import { User } from './user';

export class Project {
  id: number;
  name: string;
  amount: number;
  dateOpened: Date;
  dateClosed: Date;
  typeProject: TypeProject;
  duration: number;
  user: User;

  constructor() {

  }

}
