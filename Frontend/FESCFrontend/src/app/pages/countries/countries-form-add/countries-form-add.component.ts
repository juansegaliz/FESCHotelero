import { Component, NgModule } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../models/entities/countries/countries';
import { Response } from '../../../models/api/response';

@Component({
  selector: 'Ffr-countries-form-add',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule],
  templateUrl: './countries-form-add.component.html',
  styleUrl: './countries-form-add.component.scss',
})
export class CountriesFormAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
  }

  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group({
      countryId: null,
      name: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  async onSave(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: Country = form.value;
    
    await this.save(info);
  }

  async save(info: Country): Promise<void> {
    this.countryService.add(info.name, info.code).subscribe(
      (responseSuccess: Response<boolean>) => {
        const message = Object.entries(responseSuccess.messages)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        this.router.navigateByUrl("/parameters/countries");
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
