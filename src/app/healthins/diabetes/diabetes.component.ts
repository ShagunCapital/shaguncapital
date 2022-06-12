import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css'],
  host: {class: 'healthins'}
})
export class DiabetesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
