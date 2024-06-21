import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioRegistroComponent } from '../../components/formulario-registro/formulario-registro.component';
import { UserService } from '../../core/services/user.service';
import { User } from '../../models/entities/users/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '../../models/api/response';

@Component({
  selector: 'Ffr-signup',
  standalone: true,
  imports: [CommonModule, FormularioRegistroComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {

  

}
