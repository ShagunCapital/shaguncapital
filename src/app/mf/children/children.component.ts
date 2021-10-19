import { Component, OnInit } from '@angular/core';
import {SipUtilComponent} from '../../Calculators/sip-util/sip-util.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css','../global.component.css']
})


export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
