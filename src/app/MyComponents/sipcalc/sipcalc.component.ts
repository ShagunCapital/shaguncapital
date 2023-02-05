import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
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
  public chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'SIP Investment Calculator'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Amount (in Rupees)'
        }
      },
      series: [{
        name: 'Investment',
        data: [],
        type: undefined
      }]
    };

    this.updateChartData();
  }

  calculateSIP() {
    let investmentAmount = +(<HTMLInputElement>document.getElementById("investmentAmount")).value;
    let investmentPeriod = +(<HTMLInputElement>document.getElementById("investmentPeriod")).value;
    let rateOfReturn = +(<HTMLInputElement>document.getElementById("rateOfReturn")).value;

    let sipAmount = investmentAmount * (1 + rateOfReturn / 100) ** (investmentPeriod / 12);
    return sipAmount;
  }

  updateChartData() {
    let investmentAmount = +(<HTMLInputElement>document.getElementById("investmentAmount")).value;
    let investmentPeriod = +(<HTMLInputElement>document.getElementById("investmentPeriod")).value;
    let rateOfReturn = +(<HTMLInputElement>document.getElementById("rateOfReturn")).value;

    let data = [];
    for (let i = 1; i <= investmentPeriod; i++) {
      data.push(investmentAmount * (1 + rateOfReturn / 100) ** (i / 12));
    }

    this.chartOptions.series[0].data = data;

    Highcharts.chart('chartContainer', this.chartOptions);
  }
}
