import { DocumentType } from './document-type';
import { Project } from './project';

export class Document{
  public id?: number;
  public name: string;
  public url?: string;
  public documentType: DocumentType;
  public project?: Project;

  constructor(name: string, documentType: DocumentType, url?: string, id?: number, project?: Project){
    this.id = id;
    this.name = name;
    this.url = url;
    this.documentType = documentType;
    this.project = project;
  }
}
