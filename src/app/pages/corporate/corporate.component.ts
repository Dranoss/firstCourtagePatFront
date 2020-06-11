import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {

  constructor() { }

  articleId = 4;

  ngOnInit(): void {
  }

  sendActicleId(){
    return this.articleId;
  }

}
