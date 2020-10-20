import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {
  innerWidth: number;
  constructor() { }

  articleId = 4;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  sendActicleId(){
    return this.articleId;
  }

}
