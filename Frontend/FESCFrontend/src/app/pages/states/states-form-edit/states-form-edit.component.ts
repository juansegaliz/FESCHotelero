import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../../components/menu/menu.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StateService } from '../../../core/services/state.service';
import { CountryService } from '../../../core/services/country.service';
import { State } from '../../../models/entities/states/states';
import { Response } from '../../../models/api/response';
import { Select } from '../../../models/forms/select';
import { NgFor } from '@angular/common';

@Component({
  selector: 'Ffr-states-form-edit',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule, NgFor],
  templateUrl: './states-form-edit.component.html',
  styleUrl: './states-form-edit.component.scss',
})
export class StatesFormEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
    this.countriesSelectData = [];
  }

  id: number = 0;

  countriesSelectData: Select[];
  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group({
      stateId: null,
      name: ['', Validators.required],
      countryId: [0, Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    
    this.countriesSelectData = await this.countryService.getDataForSelect();

    const state = (await this.stateService.get(this.id)).data;
    this.form.patchValue(state);
  }

  async onUpdate(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: State = form.value;

    await this.update(info);
  }

  async update(info: State): Promise<void> {
    this.stateService.update(info.stateId, info.name, info.countryId).subscribe(
      (responseSuccess: Response<boolean>) => {
        const message = Object.entries(responseSuccess.messages)
          .map(([key, value]) => `${value}`)
          .join(' ');

        alert(message);
        this.router.navigateByUrl('/parameters/states');
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
