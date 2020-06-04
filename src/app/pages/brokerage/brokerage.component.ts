import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-brokerage',
  templateUrl: './brokerage.component.html',
  styleUrls: ['./brokerage.component.scss']
})
export class BrokerageComponent implements OnInit {
  isShow = true;
  articleId = 3;
  
  constructor() { }

  ngOnInit(): void {
    this.sendArticleId();
  }
 
  sendArticleId(){
    return this.articleId;
  }
 
  toggleDisplay(){
    this.isShow= !this.isShow;
  }
}
