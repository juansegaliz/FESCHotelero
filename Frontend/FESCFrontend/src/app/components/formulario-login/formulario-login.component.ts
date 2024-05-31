import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'Ffr-formulario-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.scss',
})
export class FormularioLoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }
}
