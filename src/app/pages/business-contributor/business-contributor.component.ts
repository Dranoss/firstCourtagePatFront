import { Component, OnInit } from '@angular/core';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'apa-business-contributor',
  templateUrl: './business-contributor.component.html',
  styleUrls: ['./business-contributor.component.scss']
})
export class BusinessContributorComponent implements OnInit {
  videoModel = {url: ''};
  textModel = {id: 0, text: ''};
  pictureModel = {id: 0, url: ''};
  videoUrl = 'https://www.dailymotion.com/video/x59050';
  texts = [{id: 1, text: 'Quid? qui se etiam nunc subsidiis patrimonii aut amicorum liberalitate sustentant, hos perire patiemur? An, si qui frui publico non potuit per hostem, hic tegitur ipsa lege censoria; quem is frui non sinit, qui est, etiamsi non appellatur, hostis, huic ferri auxilium non oportet? Retinete igitur in provincia diutius eum, qui de sociis cum hostibus, de civibus cum sociis faciat pactiones, qui hoc etiam se pluris esse quam collegam putet, quod ille vos tristia voltuque deceperit, ipse numquam se minus quam erat, nequam esse simularit. Piso autem alio quodam modo gloriatur se brevi tempore perfecisse, ne Gabinius unus omnium nequissimus existimaretur.'}];
  pictures = [{id: 1, url: 'http://via.placeholder.com/300'}, {id: 2, url: 'http://via.placeholder.com/300'}, {id: 3, url: 'http://via.placeholder.com/300'}];
  displayEditFormUrl = false;
  displayEditText = false;
  displayNewText = false;
  displayEditPicture = false;
  user = {id: 0, firstname: '', lastname: '', role: 'admin'};
  constructor() { }

  ngOnInit(): void {
    this.isAdmin();
  }
  isAdmin(){
    return this.user.role === 'admin';
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
    this.toggleDisplayEditPicture();
    this.pictureModel = picture;
  }
  onSubmitUrlForm(){
    this.videoUrl = this.videoModel.url;
    this.toggleDisplayEditFormUrl();
  }
  onSubmitTextForm(){
    // Sera remplacé par une fonction put via un service dédié
    const index = this.texts.findIndex(x => x.id === this.textModel.id);
    this.texts.splice(index, 1, this.textModel);
    this.toggleDisplayEditText();
    this.initalizeTextForm();
  }
  onSubmitPictureForm(){
    // Sera remplacé par une fonction put via un service dédié
    const index = this.pictures.findIndex(x => x.id === this.pictureModel.id);
    this.pictures.splice(index, 1, this.pictureModel);
    this.toggleDisplayEditPicture();
    this.initalizePictureForm();
  }
  createNewText(text){
    // Sera remplacé par une fonction post via un service dédié
    const newId = this.texts.length + 1;
    this.texts.push({id: newId, text: this.textModel.text});
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
    const index = this.texts.findIndex(x => x.id === text.id);
    this.texts.splice(index, 1);
  }

  // A SUPPRIMER LORSQUE LA PAGE SERA VALIDEE PAR LE CLIENT
  roleIsAdmin(){
    this.user.role = 'admin';
  }
  roleIsClient(){
    this.user.role = 'client';
  }
}
