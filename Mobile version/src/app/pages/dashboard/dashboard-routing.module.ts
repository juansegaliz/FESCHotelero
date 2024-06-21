import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'airlines',
        loadChildren: () =>
          import('./airlines/airlines.module').then(
            (m) => m.AirlinesPageModule
          ),
      },
      {
        path: 'hotel-plans',
        loadChildren: () =>
          import('./hotel-plans/hotel-plans.module').then(
            (m) => m.HotelPlansPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
