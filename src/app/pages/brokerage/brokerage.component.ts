import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-brokerage',
  templateUrl: './brokerage.component.html',
  styleUrls: ['./brokerage.component.scss']
})
export class BrokerageComponent implements OnInit {
  isShow = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.isShow= !this.isShow;
  }
}
