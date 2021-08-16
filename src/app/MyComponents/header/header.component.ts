import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { BlogCard, Header, Home, Toggle } from 'src/app/Header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  startyear: number = 0;
  endyear: number = 0;
  total: number = 0;
  isvalid: boolean = false;
  amount: number = 0;
  finalamount: number = 0;
  rate: number = 0;

  headerx: Header[] = [
    {
      title: "Get started with SIP",
      desc: "With supporting text below as a natural lead-in to additional content.",
      active: true
    },
    {
      title: "Tax Saving",
      desc: "With supporting text below as a natural lead-in to additional content.",
      active: true
    },
    {
      title: "Renew Policy",
      desc: "With supporting text below as a natural lead-in to additional content.",
      active: true
    },
    {
      title: "Claim on existing policy",
      desc: "With supporting text below as a natural lead-in to additional content.",
      active: true
    },
    {
      title: "Cashless Hospital List",
      desc: "With supporting text below as a natural lead-in to additional content.",
      active: true
    },
  ]

  services: Home[] = [
    {
      cardTitle: "Health Insurance",
      desc: "The bonus declared on our money bank plans add to your savings",
      imgsrc: "./../.././../assets/images/health-insurance.png",
      active: true
    },
    {
      cardTitle: "Home Insurance",
      desc: "The bonus declared on our money bank plans add to your savings",
      imgsrc: "./../.././../assets/images/home-insurance.png",
      active: true
    },
    {
      cardTitle: "Car Insurance",
      desc: "The bonus declared on our money bank plans add to your savings",
      imgsrc: "./../.././../assets/images/car-insurance.png",
      active: true
    },
  ]

  plusMinus: Toggle[] = [
    {
      title: "A Fast, Easy Application",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      active: true
    },

    {
      title: "Clients Focused",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      active: true
    },

    {
      title: "We Can Save Your Money",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      active: true
    },
  ]

  blog: BlogCard[] = [
    {
      title: "Which allows you to pay down your policy.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
      time: "Last updated 3 mins ago",
      active: true
    },

    {
      title: "What we are capable to usually discovered.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
      time: "Last updated 3 mins ago",
      active: true
    },

    {
      title: "Reasons to explan fast business builder.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
      time: "Last updated 3 mins ago",
      active: true
    }
  ]

  constructor() {
  }




  ngOnInit() {
    this.startyear = 1960;
    this.endyear = 2040;
    this.total = 80;
    this.amount = 1000;
    this.finalamount = 2548;
    this.rate = 11.125;
  }
  onKeyPress(event: any, key: any) {
    event = event.target.value;
    var dateval = event;
    if (dateval.length < 3 || dateval.length <= 3 || dateval.length > 4 && key == this.startyear || key == this.endyear) {
      this.isvalid = true;
    }
    if (dateval.length == 4 && key == this.startyear) {
      this.total = dateval - this.endyear;
    }
    else if (dateval.length == 4 && key == this.endyear) {
      this.total = dateval - this.startyear;
    }
  }
  onchange(event1: any, a: any) {
    event1 = event1.target.value;
    var amountval = event1;
    this.finalamount = (amountval * this.rate * this.total) / (100 * 12);
  }

}
