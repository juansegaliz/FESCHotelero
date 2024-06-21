import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPlansPageRoutingModule } from './hotel-plans-routing.module';

import { HotelPlansPage } from './hotel-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPlansPageRoutingModule
  ],
  declarations: [HotelPlansPage]
})
export class HotelPlansPageModule {}
