import { ProjectType } from './project-type';

export class Project{
  public id?: number;
  public amount: number;
  public name: string;
  public projectType: ProjectType;
  creationDate: Date;
  closingDate: Date;
  public documents?: Document;

  constructor(
    name: string,
    amount: number,
    projectType: ProjectType,
    creationDate: Date,
    closingDate: Date,
    documents?: Document,
    id?: number
  ){
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.projectType = projectType;
    this.creationDate = creationDate;
    this.closingDate = closingDate;
    this.documents = documents;
  }

}
