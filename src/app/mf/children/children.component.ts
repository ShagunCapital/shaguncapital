import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
  // TODO: copy paste in all components
  host: {class: 'mf'}
})


export class ChildrenComponent implements OnInit {
  public readonly classList = "auth";

  constructor() { }

  ngOnInit(): void {
  }

  
}
