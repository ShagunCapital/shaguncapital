import { Component, OnInit } from '@angular/core';
// import { ChartsModule } from 'angular-bootstrap-md';
import { Chart } from 'chart.js';

import { AppComponent } from './.././../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-sipcalc',
  templateUrl: './sipcalc.component.html',
  styleUrls: ['./sipcalc.component.css']
})
export class SipcalcComponent implements OnInit {

  // public chartType: string = 'line';

  // public chartDatasets: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  // ];

  // public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(105, 0, 132, .2)',
  //     borderColor: 'rgba(200, 99, 132, .7)',
  //     borderWidth: 2,
  //   },
  //   {
  //     backgroundColor: 'rgba(0, 137, 132, .2)',
  //     borderColor: 'rgba(0, 10, 130, .7)',
  //     borderWidth: 2,
  //   }
  // ];

  // public chartOptions: any = {
  //   responsive: true
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
