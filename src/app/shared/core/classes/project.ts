import { ProjectType } from './project-type';
import { ProjectStatus } from './project-status';
import { Document } from './document';
import { User } from './user';

export class Project{
  public id?: number;
  public amount: number;
  public name: string;
  public projectType: ProjectType;
  public projectStatus: ProjectStatus;
  public creationDate: Date;
  public closingDate?: Date;
  public documents?: Document[];
  public user?: User;

  constructor(
    name: string,
    amount: number,
    projectType: ProjectType,
    projectStatus: ProjectStatus,
    creationDate: Date,
    closingDate?: Date,
    documents?: Document[],
    user?: User,
    id?: number
  ){
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.projectType = projectType;
    this.projectStatus = projectStatus;
    this.creationDate = creationDate;
    this.closingDate = closingDate;
    this.documents = documents;
    this.user = user;
  }

}
