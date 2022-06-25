import { Component, Input, OnInit } from '@angular/core';
import { AquaticFood } from 'src/app/share-module/aquatic-food.module';
import { AquaticFoodService } from 'src/app/share-service/aquatic-food.service';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css']
})
export class AquaticFoodItemComponent implements OnInit {
  @Input() item!:AquaticFood;
  constructor(private aquaticFoodService:AquaticFoodService) { }
  openDetail(){
    this.aquaticFoodService.dataDeteil.emit(this.item)
  }
  ngOnInit(): void {
  }

}
