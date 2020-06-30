import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ArticleService } from '../../services/article/article.service';
import { User } from '../../core/classes/user';
import { Article } from '../../core/classes/article';
import { ArticlePicture } from '../../core/classes/articlePicture';

@Component({
  selector: 'apa-editable-content',
  templateUrl: './editable-content.component.html',
  styleUrls: ['./editable-content.component.scss']
})
export class EditableContentComponent implements OnInit {
  user: User;
  article: Article;

  // FORM MODEL
  videoModel = { code: '' };
  textModel = { id: 0, text: '' };
  pictureModel = { id: 0, url: '' };

  // DISPLAY EDIT DEPENDING ON ROLE
  roleIsAdmin = false;
  displayEditButton = false;
  changeCurrentView = true;
  displayEditVideoCodeForm = false;
  displayEditText = false;
  isNewText = false;
  isNewPicture = false;
  displayEditPicture = false;

  // A MODIFIER LORSQUE L'ON AURA LA LIAISON BACK
  userId = 1;

  // PERMET D'ATTRIBUER UN CONTENU A CHAQUE PAGE
  @Input() articleId;

  constructor(
    private userService: UserService,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.isAdmin();
    this.currentArticle();
    this.toggleDisplayEditButton();
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  // --------------------------- *** CHANGE ORDER *** ---------------------------
  changeOrder(containerOrder, move) {
    if (containerOrder === this.article.order.video - move && this.article.order.video >= 1) {
      this.article.order.video -= move;
      if (containerOrder === this.article.order.text && this.article.order.text <= 3) {
        this.article.order.text += move;
      } else if (containerOrder === this.article.order.picture && this.article.order.picture <= 3) {
        this.article.order.picture += move;
      }
    } else if (containerOrder === this.article.order.picture - move && this.article.order.picture >= 1) {
      this.article.order.picture -= move;
      if (containerOrder === this.article.order.text && this.article.order.text <= 3) {
        this.article.order.text += move;
      } else if (containerOrder === this.article.order.video && this.article.order.video <= 3) {
        this.article.order.video += move;
      }
    } else if (containerOrder === this.article.order.text - move && this.article.order.text >= 1) {
      this.article.order.text -= move;
      if (containerOrder === this.article.order.video && this.article.order.video <= 3) {
        this.article.order.video += move;
      } else if (containerOrder === this.article.order.picture && this.article.order.picture <= 3) {
        this.article.order.picture += move;
      }
    }
    console.log(this.article.order);
  }

  // --------------------------- *** GET OBSERVABLES *** ---------------------------
  isAdmin(): boolean {

    const us = this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });

    return this.user.role === 'admin';
  }


  currentArticle() {
    // A UTILISER LORSQUE L'ON AURA LA LIAISON BACK
    // this.articleService.getArticleById(this.articleId).subscribe(data => {
    //   this.article = data;
    // });
    this.article = this.articleService.getArticleById(this.articleId); // A SUPPRIMER LORSQUE L'ON AURA LA LIAISON BACK
    return this.article;
  }


  toggleDisplayEditButton() {
    if (this.isAdmin() === true && this.changeCurrentView === true) {
      return this.displayEditButton = true;
    } else {
      return this.displayEditButton = false;
    }
  }
  changeView() {
    this.changeCurrentView = !this.changeCurrentView;
    this.toggleDisplayEditButton();
  }

  // --------------------------- *** EDIT VIDEO *** ---------------------------
  toggleDisplayEditVideoCodeForm() {
    this.displayEditVideoCodeForm = !this.displayEditVideoCodeForm;
  }
  onSubmitVideoCodeForm() {
    this.article.videoCode = this.videoModel.code;
    this.toggleDisplayEditVideoCodeForm();
  }

  // --------------------------- *** EDIT TEXT *** ---------------------------
  toggleDisplayEditText(isNewTextValue) {
    this.displayEditText = !this.displayEditText;
    if (isNewTextValue === 'new') {
      this.isNewText = true;
    } else {
      this.isNewText = false;
    }
    this.textModel = { id: 0, text: '' };
  }
  activeEditTextMethods(text, isNewTextValue) {
    this.toggleDisplayEditText(isNewTextValue);
    this.textModel = text;
  }
  // POST && PUT && DELETE
  onSubmitTextForm(text) {
    if (this.isNewText === false) {
      // Sera remplacé par une fonction put via un service dédié
      const index = this.article.texts.findIndex(x => x.id === text.id);
      this.article.texts.splice(index, 1, text);
    } else {
      // Sera remplacé par une fonction post via un service dédié
      const newId = this.article.texts.length + 1;
      this.article.texts.push({ id: newId, content: text.content });
    }
    this.toggleDisplayEditText('');
  }
  deleteText(text) {
    // Sera remplacé par une fonction delete via un service dédié
    const index = this.article.texts.findIndex(x => x.id === text.id);
    this.article.texts.splice(index, 1);
  }

  // --------------------------- *** EDIT PICTURE *** ---------------------------
  toggleDisplayEditPicture(isNewPictureValue) {
    this.displayEditPicture = !this.displayEditPicture;
    if (isNewPictureValue === 'new') {
      this.isNewPicture = true;
    } else {
      this.isNewPicture = false;
    }
    this.pictureModel = { id: 0, url: '' };
  }
  activeEditPictureMethods(picture: ArticlePicture, isNewPictureValue) {
    this.toggleDisplayEditPicture(isNewPictureValue);
    this.pictureModel = picture;
  }
  // POST && PUT && DELETE
  onSubmitPictureForm(picture: ArticlePicture) {
    if (this.isNewPicture === false) {
      // Sera remplacé par une fonction put via un service dédié
      const index = this.article.pictures.findIndex(x => x.id === picture.id);
      this.article.pictures.splice(index, 1, picture);
    } else {
      // Sera remplacé par une fonction post via un service dédié
      const newId = this.article.pictures.length + 1;
      this.article.pictures.push({ id: newId, url: picture.url });
    }
    this.toggleDisplayEditPicture('');
  }
  deletePicture(picture: ArticlePicture) {
    const index = this.article.pictures.findIndex(x => x.id === picture.id);
    this.article.pictures.splice(index, 1);
  }
}
