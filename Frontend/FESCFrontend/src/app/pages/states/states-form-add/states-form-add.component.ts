import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../../components/menu/menu.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StateService } from '../../../core/services/state.service';
import { State } from '../../../models/entities/states/states';
import { Response } from '../../../models/api/response';
import { CountryService } from '../../../core/services/country.service';
import { Select } from '../../../models/forms/select';
import { NgFor } from '@angular/common';

@Component({
  selector: 'Ffr-states-form-add',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule, NgFor],
  templateUrl: './states-form-add.component.html',
  styleUrl: './states-form-add.component.scss'
})
export class StatesFormAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
    this.countriesSelectData = [];
  }

  countriesSelectData: Select[];
  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group({
      stateId: null,
      name: ['', Validators.required],
      countryId: [0, Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    this.countriesSelectData = await this.countryService.getDataForSelect();
  }

  async onSave(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: State = form.value;
    
    await this.save(info);
  }

  async save(info: State): Promise<void> {
    this.stateService.add(info.name, info.countryId).subscribe(
      (responseSuccess: Response<boolean>) => {
        const message = Object.entries(responseSuccess.messages)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        this.router.navigateByUrl("/parameters/states");
        //this.snackbarService.openSuccess(message, 'close');
      },
      (responseError: any) => {
        const data = responseError.error.errors || responseError.error.messages;
        const message = Object.entries(data)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        //this.snackbarService.openError(message, 'close');
      }
    );
  }
}
