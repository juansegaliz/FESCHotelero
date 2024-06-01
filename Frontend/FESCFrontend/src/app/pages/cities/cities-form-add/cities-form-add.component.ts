import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CityService } from '../../../core/services/city.service';
import { StateService } from '../../../core/services/state.service';
import { CountryService } from '../../../core/services/country.service';
import { Router, RouterModule } from '@angular/router';
import { Select } from '../../../models/forms/select';
import { City } from '../../../models/entities/cities/cities';
import { Response } from '../../../models/api/response';
import { MenuComponent } from "../../../components/menu/menu.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'Ffr-cities-form-add',
    standalone: true,
    templateUrl: './cities-form-add.component.html',
    styleUrl: './cities-form-add.component.scss',
    imports: [RouterModule, MenuComponent, ReactiveFormsModule, NgFor]
})
export class CitiesFormAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService,
    private stateService: StateService,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
    this.countriesSelectData = [];
    this.statesSelectData = [];
  }

  countriesSelectData: Select[];
  statesSelectData: Select[];
  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group({
      cityId: null,
      name: ['', Validators.required],
      countryId: [0, Validators.required],
      stateId: [0, Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    this.countriesSelectData = await this.countryService.getDataForSelect();
  }

  async onCountryChange(event: Event): Promise<void> {
    const info: City = this.form.value;
    this.statesSelectData = await this.stateService.getDataForSelectByCountryId(info.countryId);
  }

  async onSave(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: City = form.value;
    
    await this.save(info);
  }

  async save(info: City): Promise<void> {
    this.cityService.add(info.name, info.countryId, info.stateId).subscribe(
      (responseSuccess: Response<boolean>) => {
        const message = Object.entries(responseSuccess.messages)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        this.router.navigateByUrl("/parameters/cities");
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
