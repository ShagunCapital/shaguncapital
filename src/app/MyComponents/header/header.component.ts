import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { BlogCard, Header, Home, Toggle } from 'src/app/Header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
