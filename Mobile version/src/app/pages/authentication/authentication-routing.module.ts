import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationPage } from './authentication.page';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPage,
    children: [
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then(
            (m) => m.RegisterPageModule
          ),
      },
      {
        path: 'forgot',
        loadChildren: () =>
          import('./forgot/forgot.module').then((m) => m.ForgotPageModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationPageRoutingModule {}
