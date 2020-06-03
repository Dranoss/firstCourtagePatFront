import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ArticleService } from '../../services/article/article.service';
import { User } from '../../core/classes/user';
import { Article } from '../../core/classes/article';

@Component({
  selector: 'apa-editable-content',
  templateUrl: './editable-content.component.html',
  styleUrls: ['./editable-content.component.scss']
})
export class EditableContentComponent implements OnInit {
  user: User;
  article: Article;

  // FORM MODEL
  videoModel = {code: ''};
  textModel = {id: 0, text: ''};
  pictureModel = {id: 0, url: ''};

  // DISPLAY EDIT DEPENDING ON ROLE
  displayEditFormUrl = false;
  displayEditText = false;
  displayNewText = false;
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
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  isAdmin(){
    // A UTILISER LORSQUE L'ON AURA LA LIAISON BACK
    // this.userService.getUserById(this.userId).subscribe(data => {
      //   this.user = data;
      // })
      this.user = this.userService.getUserById(this.userId); // A SUPPRIMER LORSQUE L'ON AURA LA LIAISON BACK
      return this.user.role === 'admin';
    }

    currentArticle(){
      // A UTILISER LORSQUE L'ON AURA LA LIAISON BACK
    // this.articleService.getArticleById(this.articleId).subscribe(data => {
    //   this.article = data;
    // });
    this.article = this.articleService.getArticleById(this.articleId); // A SUPPRIMER LORSQUE L'ON AURA LA LIAISON BACK
    return this.article;
  }

  toggleDisplayEditFormUrl(){
    this.displayEditFormUrl = !this.displayEditFormUrl;
    this.displayNewText = false;
  }
  toggleDisplayEditText(){
    this.displayEditText = !this.displayEditText;
  }
  toggleDisplayNewTextButton(){
    this.displayEditText = !this.displayEditText;
    this.displayNewText = true;
  }
  toggleDisplayEditPicture(){
    this.displayEditPicture = !this.displayEditPicture;
  }
  activeEditTextMethods(text){
    this.toggleDisplayEditText();
    this.textModel = text;
  }

  activeEditPictureMethods(picture){
    this.pictureModel = picture;
    this.toggleDisplayEditPicture();
  }
  onSubmitUrlForm(){
    this.article.videoCode = this.videoModel.code;
    this.toggleDisplayEditFormUrl();
  }
  onSubmitTextForm(){
    // Sera remplacé par une fonction put via un service dédié
    const index = this.article.texts.findIndex(x => x.id === this.textModel.id);
    this.article.texts.splice(index, 1, this.textModel);
    this.toggleDisplayEditText();
    this.initalizeTextForm();
  }
  onSubmitPictureForm(){
    // Sera remplacé par une fonction put via un service dédié
    const index = this.article.pictures.findIndex(x => x.id === this.pictureModel.id);
    this.article.pictures.splice(index, 1, this.pictureModel);
    this.toggleDisplayEditPicture();
    this.initalizePictureForm();
  }
  createNewText(text){
    // Sera remplacé par une fonction post via un service dédié
    const newId = this.article.texts.length + 1;
    this.article.texts.push({id: newId, text: this.textModel.text});
    this.toggleDisplayEditText();
    this.initalizeTextForm();
    this.displayNewText = false;
  }
  initalizePictureForm(){
    this.pictureModel = {id: 0, url: ''};
  }
  initalizeTextForm(){
    this.textModel = {id: 0, text: ''};
  }
  deleteText(text){
    // Sera remplacé par une fonction delete via un service dédié
    const index = this.article.texts.findIndex(x => x.id === text.id);
    this.article.texts.splice(index, 1);
  }

  // A SUPPRIMER LORSQUE LA PAGE SERA VALIDEE PAR LE CLIENT
  roleIsAdmin(){
    this.user.role = 'admin';
  }
  roleIsClient(){
    this.user.role = 'client';
  }
}
