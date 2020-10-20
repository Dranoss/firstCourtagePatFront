import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  innerWidth: number;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

}
