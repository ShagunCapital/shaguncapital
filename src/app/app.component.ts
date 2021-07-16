import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shagun-capital';
  flag:boolean=false;
  onSubmit(){
    this.flag=false;
  }
}
