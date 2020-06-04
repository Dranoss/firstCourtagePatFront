export class ArticleText{
  id?: number;
  text: string;

  constructor(text: string, id: number){
    this.id = id;
    this.text = text;
  }
}
