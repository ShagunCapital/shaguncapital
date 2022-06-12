import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childrenlife',
  templateUrl: './childrenlife.component.html',
  styleUrls: ['./childrenlife.component.css'],
  host: {class: 'lifeins'}
})
export class ChildrenlifeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
