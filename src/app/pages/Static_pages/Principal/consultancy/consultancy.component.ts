import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.scss']
})
export class ConsultancyComponent implements OnInit {
  innerWidth: number;
  constructor() { }
  articleId = 2;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.sendArticleId();
  }
  sendArticleId(){
    return this.articleId;
  }
}
