import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-business-contributor',
  templateUrl: './business-contributor.component.html',
  styleUrls: ['./business-contributor.component.scss']
})
export class BusinessContributorComponent implements OnInit {
  innerWidth: number;

  constructor() { }
  articleId = 1;
  ngOnInit(): void {
    this.sendArticleId();
    this.innerWidth = window.innerWidth;
  }
  sendArticleId(){
    return this.articleId;
  }
}
