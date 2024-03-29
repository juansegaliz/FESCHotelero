import { Routes } from '@angular/router';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // {path: '', component: MyComponentComponent},
  { path: 'home', component: MyComponentComponent, canActivate: [AuthGuard]},
];
