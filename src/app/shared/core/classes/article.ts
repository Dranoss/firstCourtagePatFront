import { ArticleText } from './articleText';
import { ArticlePicture } from './articlePicture';

export class Article{
  id?: number;
  texts: ArticleText[];
  pictures: ArticlePicture[];
  videoCode: string;

  constructor(texts: ArticleText[], pictures: ArticlePicture[], videoCode: string, id?: number){
    this.id = id;
    this.texts = texts;
    this.pictures = pictures;
    this.videoCode = videoCode;
  }
}
