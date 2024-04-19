import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeGuard } from './core/guards/home.guard';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CountriesComponent } from './pages/countries/countries.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'parameters',
        children: [{ path: 'countries', component: CountriesComponent }],
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
