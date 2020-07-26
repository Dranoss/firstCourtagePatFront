import { Component, OnInit } from '@angular/core';
import { SimulatorData } from './simulator-data';

@Component({
  selector: 'apa-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  simulatorData = new SimulatorData();

  constructor() { }

  ngOnInit(): void {
  }





}
