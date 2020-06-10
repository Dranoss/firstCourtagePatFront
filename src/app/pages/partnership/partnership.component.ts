import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {

  constructor() { }

  articleId=5;

  ngOnInit(): void {
  }

  sendActicleId(){
    return this.articleId;
  }

}
