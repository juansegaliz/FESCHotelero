import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirlinesPageRoutingModule } from './airlines-routing.module';

import { AirlinesPage } from './airlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirlinesPageRoutingModule
  ],
  declarations: [AirlinesPage]
})
export class AirlinesPageModule {}
