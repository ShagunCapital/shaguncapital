import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardiac',
  templateUrl: './cardiac.component.html',
  styleUrls: ['./cardiac.component.css'],
  host: {class: 'healthins'}
})
export class CardiacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
