import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeGuard } from './core/guards/home.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [HomeGuard] },
  {
    path: '',
    canActivate: [AuthGuard], // Aplicar AuthGuard a todas las rutas dentro de este grupo
    children: [
      { path: 'home', component: HomeComponent },
      // { path: 'ejemplox', component: MyComponentComponent },
      // Otras rutas protegidas por AuthGuard aquí...
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
