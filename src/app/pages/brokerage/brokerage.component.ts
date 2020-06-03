import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-brokerage',
  templateUrl: './brokerage.component.html',
  styleUrls: ['./brokerage.component.scss']
})
export class BrokerageComponent implements OnInit {

  constructor() { }
  articleId = 3;
  ngOnInit(): void {
    this.sendArticleId();
  }
  sendArticleId(){
    return this.articleId;
  }
}
