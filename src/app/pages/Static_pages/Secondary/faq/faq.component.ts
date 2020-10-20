import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  innerWidth: number;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = innerWidth;
  }

}
