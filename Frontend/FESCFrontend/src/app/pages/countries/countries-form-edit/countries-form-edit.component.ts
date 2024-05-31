import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../../components/menu/menu.component';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../models/entities/countries/countries';
import { Response } from '../../../models/api/response';

@Component({
  selector: 'Ffr-countries-form-edit',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule],
  templateUrl: './countries-form-edit.component.html',
  styleUrl: './countries-form-edit.component.scss',
})
export class CountriesFormEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
  }

  id: number = 0;

  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group({
      countryId: null,
      name: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    const country = (await this.countryService.get(this.id)).data;
    this.form.patchValue(country);
  }

  async onUpdate(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: Country = form.value;

    await this.update(info);
  }

  async update(info: Country): Promise<void> {
    this.countryService.update(info.countryId, info.name, info.code).subscribe(
      (responseSuccess: Response<boolean>) => {
        const message = Object.entries(responseSuccess.messages)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        this.router.navigateByUrl('/parameters/countries');
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
