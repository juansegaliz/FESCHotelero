import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/entities/users/user';
import { Response } from '../../models/api/response';
import { UserCreate } from '../../models/entities/users/userCreate';
import { validateMatchValues } from '../../core/custom-validators/validateMatchValues';
import { NgIf } from '@angular/common';
import { validatePhoneNumber } from '../../core/custom-validators/validatePhoneNumber';

@Component({
  selector: 'Ffr-formulario-registro',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss'],
})
export class FormularioRegistroComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.getForm();
  }

  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group(
      {
        userId: null,
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        passwordconfirm: ['', Validators.required],
        roleId: 0,
        departmentId: 0,
      },
      {
        validators: [
          validateMatchValues('password', 'passwordconfirm'),
          validatePhoneNumber('phone'),
        ],
      }
    );
  }

  async onSave(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: UserCreate = form.value;

    console.log(this.form);

    await this.save(info);
  }

  async save(info: UserCreate): Promise<void> {
    this.userService
      .add(
        info.email,
        info.password,
        info.fullName,
        info.roleId!,
        info.departmentId!,
        info.phone
      )
      .subscribe(
        (responseSuccess: Response<boolean>) => {
          const message = Object.entries(responseSuccess.messages)
            .map(([key, value]) => `${value}`)
            .join(' ');

          alert(message);
          this.router.navigateByUrl('/login');
          //this.snackbarService.openSuccess(message, 'close');
        },
        (responseError: any) => {
          console.log(responseError);
          const data =
            responseError.error.errors || responseError.error.messages;
          const message = Object.entries(data)
            .map(([key, value]) => `${value}`)
            .join(' ');

          alert(message);
          //this.snackbarService.openError(message, 'close');
        }
      );
  }
}
