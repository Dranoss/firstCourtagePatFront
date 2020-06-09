import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  constructor() { }

  articleId = 4;

  ngOnInit(): void {
    this.sendActicleId();
  }
  sendActicleId(){
    return this.articleId;
  }

}
