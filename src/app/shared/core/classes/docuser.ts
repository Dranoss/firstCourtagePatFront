import { Project } from './project';
import { Doctype } from './doctype';

export class Docuser {


  public id?: number;
  public name: string;
  public url: string;
  public content: File;
  public documentType: Doctype;

  public project;

  constructor(name: string,url: string,content: File, project: Project, docType: Doctype, id?:number) {
    this.id= id;
    this.name =name;
    this.content= content;
    this.url= url;
    this.documentType = docType;
    this.project = project;
  }

}
