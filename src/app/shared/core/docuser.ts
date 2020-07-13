export class Docuser {


  public id?: number;
  public name: string;
  public description: string;
  public content: File;

  constructor(name: string,description: string,content: File, id?:number) {
    this.id= id;
    this.name =name;
    this.content= content;
    this.description= description;
   }

}
