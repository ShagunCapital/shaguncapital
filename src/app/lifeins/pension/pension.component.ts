import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pension',
  templateUrl: './pension.component.html',
  styleUrls: ['./pension.component.css'],
  host: {class: 'lifeins'}
})
export class PensionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
