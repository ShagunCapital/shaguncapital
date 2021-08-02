import { Component, OnInit } from '@angular/core';
import { MoreCalc } from 'src/app/Header';

@Component({
  selector: 'app-inflationcalc',
  templateUrl: './inflationcalc.component.html',
  styleUrls: ['./inflationcalc.component.css']
})
export class InflationcalcComponent implements OnInit {

  cardsCalc: MoreCalc[] = [
    {
      title: "SIP Calculator",
      desc: "Find out how much your tax-saving investments will grow if you invested in ELSS funds",
      active: true
    },
    {
      title: "Goal SIP Calculator",
      desc: "Find out how much your tax-saving investments will grow if you invested in ELSS funds",
      active: true
    },
    {
      title: "Insurance Calculator",
      desc: "Find out how much your tax-saving investments will grow if you invested in ELSS funds",
      active: true
    },
    {
      title: "Income TAX Calculator",
      desc: "Find out how much your tax-saving investments will grow if you invested in ELSS funds",
      active: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
