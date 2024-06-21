import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirlinesPage } from './airlines.page';

const routes: Routes = [
  {
    path: '',
    component: AirlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirlinesPageRoutingModule {}
