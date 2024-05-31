import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeGuard } from './core/guards/home.guard';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';
import { CountriesFormAddComponent } from './pages/countries/countries-form-add/countries-form-add.component';
import { CountriesFormEditComponent } from './pages/countries/countries-form-edit/countries-form-edit.component';
import { AgenciesComponent } from './pages/agencies/agencies.component';
import { AgenciesFormAddComponent } from './pages/agencies/agencies-form-add/agencies-form-add.component';
import { AgenciesFormEditComponent } from './pages/agencies/agencies-form-edit/agencies-form-edit.component';
import { StatesComponent } from './pages/states/states.component';
import { StatesFormAddComponent } from './pages/states/states-form-add/states-form-add.component';
import { StatesFormEditComponent } from './pages/states/states-form-edit/states-form-edit.component';
import { BookingGroupsComponent } from './pages/booking/booking-groups/booking-groups.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'registro', component:  SignupComponent},
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'workspaces', component: WorkspacesComponent },
      {
        path: 'parameters',
        children: [
          {
            path: 'countries',
            component: CountriesComponent
          },
          {
            path: 'countries/add',
            component: CountriesFormAddComponent
          },
          {
            path: 'countries/view/:id',
            component: CountriesFormEditComponent
          },
          {
            path: 'states',
            component: StatesComponent
          },
          {
            path: 'states/add',
            component: StatesFormAddComponent
          },
          {
            path: 'states/view/:id',
            component: StatesFormEditComponent
          },
          {
            path: 'agencies',
            component: AgenciesComponent
          },
          {
            path: 'agencies/add',
            component: AgenciesFormAddComponent
          },
          {
            path: 'agencies/view/:id',
            component: AgenciesFormEditComponent
          },
          {
            path: 'booking/groups',
            component: BookingGroupsComponent
          }
        ],
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
