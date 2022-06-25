import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css']
})
export class DistributionListComponent implements OnInit {

  pb = [{a:'A',b:1},{a:'B',b:2},{a:'C',b:3}]

  constructor() { }

  ngOnInit(): void {
  }

}
