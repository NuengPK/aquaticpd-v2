import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() g = new EventEmitter<string>();
  openPage:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  openAquaticFood(){
    this.openPage = "Aquatic Food"
    this.g.emit(this.openPage)
  }

  openDistribution(){
    this.openPage = "Distribution"
    this.g.emit(this.openPage)
  }
}
