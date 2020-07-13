import { Document } from './document';
import { ProjectType } from './project-type';

export class DocumentType{
  id?: number;
  name: string;
  documents?: Document[];
  projectType?: ProjectType | {id?: number};

  constructor(name: string, documents?: Document[], id?: number, projectType?: ProjectType | {id?: number}){
    this.id = id;
    this.name = name;
    this.documents = documents;
    this.projectType = projectType;
  }
}
