import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apa-appointment-button',
  templateUrl: './appointment-button.component.html',
  styleUrls: ['./appointment-button.component.scss']
})
export class AppointmentButtonComponent implements OnInit {
  isShow = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.isShow = !this.isShow;
  }

}
