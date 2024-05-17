import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../../components/menu/menu.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { StateService } from '../../../core/services/state.service';
import { CountryService } from '../../../core/services/country.service';
import { Select } from '../../../models/forms/select';
import { CityService } from '../../../core/services/city.service';
import { City } from '../../../models/entities/cities/cities';
import { Response } from '../../../models/api/response';

@Component({
  selector: 'Ffr-cities-form-edit',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule, NgFor],
  templateUrl: './cities-form-edit.component.html',
  styleUrl: './cities-form-edit.component.scss'
})
export class CitiesFormEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
    this.countriesSelectData = [];
    this.statesSelectData = [];
  }

  id: number = 0;

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
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    
    this.countriesSelectData = await this.countryService.getDataForSelect();

    const data: City = (await this.cityService.get(this.id)).data;

    this.statesSelectData = await this.stateService.getDataForSelectByCountryId(data.countryId);

    this.form.patchValue(data);
  }

  async onUpdate(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: City = form.value;

    await this.update(info);
  }

  async update(info: City): Promise<void> {
    this.cityService.update(info.stateId, info.name, info.countryId, info.stateId).subscribe(
      (responseSuccess: Response<boolean>) => {
        const message = Object.entries(responseSuccess.messages)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        this.router.navigateByUrl('/parameters/cities');
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
