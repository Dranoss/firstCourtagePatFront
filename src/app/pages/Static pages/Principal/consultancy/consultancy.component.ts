import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.scss']
})
export class ConsultancyComponent implements OnInit {

  constructor() { }
  articleId = 2;
  ngOnInit(): void {
    this.sendArticleId();
  }
  sendArticleId(){
    return this.articleId;
  }
}
