import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../../../components/menu/menu.component';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CityService } from '../../../../core/services/city.service';
import { StateService } from '../../../../core/services/state.service';
import { CountryService } from '../../../../core/services/country.service';
import { Select } from '../../../../models/forms/select';
import { HotelplanService } from '../../../../core/services/hotelplan.service';

@Component({
  selector: 'Ffr-booking-groups-add',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule, NgFor],
  templateUrl: './booking-groups-add.component.html',
  styleUrl: './booking-groups-add.component.scss'
})
export class BookingGroupsAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private hotelplanService: HotelplanService,
    private cityService: CityService,
    private stateService: StateService,
    private countryService: CountryService,
    private router: Router
  ) {
    this.form = this.getForm();
    this.hotelplansSelectData = [];
    this.countriesSelectData = [];
    this.statesSelectData = [];
  }
  
  hotelplansSelectData: Select[];
  countriesSelectData: Select[];
  statesSelectData: Select[];
  form: FormGroup;

  getForm(): FormGroup {
    return this.formBuilder.group({
      hotelPlanId: [0, Validators.required],
      //cityId: null,
      //name: ['', Validators.required],
      //countryId: [0, Validators.required],
      //stateId: [0, Validators.required]
    });
  }
  
  async ngOnInit(): Promise<void> {
    this.hotelplansSelectData = await this.hotelplanService.getDataForSelect();
    this.countriesSelectData = await this.countryService.getDataForSelect();
  }
  
  async onSave(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    //const info: City = form.value;
    
    //await this.save(info);
  }
}
