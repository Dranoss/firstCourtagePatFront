import { DocumentType } from './document-type';
import { Project } from './project';

export class Document{
  id?: number;
  name: string;
  documentType: DocumentType;
  project?: Project;
}
