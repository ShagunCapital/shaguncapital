import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
  host: {class: 'lifeins'}
})
export class HealthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
