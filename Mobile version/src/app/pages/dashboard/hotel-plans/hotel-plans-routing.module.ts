import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPlansPage } from './hotel-plans.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPlansPageRoutingModule {}
