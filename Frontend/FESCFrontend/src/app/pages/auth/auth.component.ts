import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioLoginComponent } from '../../components/formulario-login/formulario-login.component';

@Component({
  selector: 'Ffr-auth',
  standalone: true,
  imports: [CommonModule,FormularioLoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
