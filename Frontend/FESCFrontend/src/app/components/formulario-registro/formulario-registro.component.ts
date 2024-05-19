import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'Ffr-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {
  registerForm= new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+57\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }


  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.registerForm.value, null, 2));

    this.registerForm.reset();
    this.submitted = false;
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }


  passwordMatchValidator(control: FormGroup): { [key: string]: boolean } | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
      
    if (!passwordControl || !confirmPasswordControl) {
      return null; 
    }
  
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
  
    if (password !== confirmPassword) {
      confirmPasswordControl.setErrors({ passwordMatchValidator: true });
      return { passwordMatchValidator: true };
    } else {
      return null; 
    }
  }
}
