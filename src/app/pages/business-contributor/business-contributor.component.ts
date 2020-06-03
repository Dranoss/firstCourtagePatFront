import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-business-contributor',
  templateUrl: './business-contributor.component.html',
  styleUrls: ['./business-contributor.component.scss']
})
export class BusinessContributorComponent implements OnInit {


  constructor() { }
  articleId = 1;
  ngOnInit(): void {
    this.sendArticleId();
  }
  sendArticleId(){
    return this.articleId;
  }
}
