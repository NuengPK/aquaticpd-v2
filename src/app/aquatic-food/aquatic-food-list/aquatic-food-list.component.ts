import { Component, OnInit } from '@angular/core';
import { AquaticFood } from 'src/app/share-module/aquatic-food.module';
import { AquaticFoodService } from 'src/app/share-service/aquatic-food.service';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css'],
})
export class AquaticFoodListComponent implements OnInit {
  aquaticFoods!: AquaticFood[];

  constructor(private aquaticFoodService: AquaticFoodService) {}

  ngOnInit(): void {
    this.aquaticFoods = this.aquaticFoodService.aquaticFoods;
  }
}
