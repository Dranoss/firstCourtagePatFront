import { ArticleText } from './articleText';
import { ArticlePicture } from './articlePicture';

export class Article{
  id?: number;
  texts: ArticleText[];
  pictures: ArticlePicture[];
  videoCode: string;
  order: {video: number, text: number, picture: number};

  constructor(
    texts: ArticleText[],
    pictures: ArticlePicture[],
    videoCode: string,
    order: {video: number, text: number, picture: number},
    id?: number)
    {
      this.id = id;
      this.texts = texts;
      this.pictures = pictures;
      this.videoCode = videoCode;
      this.order = order;
  }
}
