import { Component } from '@angular/core';
import { LoginComponent } from '../formulario/login/login.component';

@Component({
  selector: 'Ffr-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
