import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DistributionListComponent } from './distribution/distribution-list/distribution-list.component';
import { DistributionEditComponent } from './distribution/distribution-list/distribution-edit/distribution-edit.component';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { AquaticFoodListComponent } from './aquatic-food/aquatic-food-list/aquatic-food-list.component';
import { AquaticFoodItemComponent } from './aquatic-food/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodDetailComponent } from './aquatic-food/aquatic-food-detail/aquatic-food-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DistributionListComponent,
    DistributionEditComponent,
    AquaticFoodComponent,
    AquaticFoodListComponent,
    AquaticFoodItemComponent,
    AquaticFoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
