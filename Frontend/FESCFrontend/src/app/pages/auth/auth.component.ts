import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'Ffr-auth',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
