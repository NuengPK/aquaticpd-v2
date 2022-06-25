import { Component, OnInit } from '@angular/core';
import { AquaticFood } from 'src/app/share-module/aquatic-food.module';
import { AquaticFoodService } from 'src/app/share-service/aquatic-food.service';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {
  openDetail!:AquaticFood;
  constructor(private aquaticFoodService:AquaticFoodService) { }

  ngOnInit(): void {
    this.aquaticFoodService.dataDeteil.subscribe(
      (detail) => {this.openDetail = detail
    console.log(detail)
      }

    )
  }

}
