import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aquaticpd-v2';
  g:string = ""
  openPager(openPage:string){
    this.g= openPage
  }
}
