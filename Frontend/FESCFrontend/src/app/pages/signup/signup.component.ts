import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioRegistroComponent } from '../../components/formulario-registro/formulario-registro.component';

@Component({
  selector: 'Ffr-signup',
  standalone: true,
  imports: [CommonModule, FormularioRegistroComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
