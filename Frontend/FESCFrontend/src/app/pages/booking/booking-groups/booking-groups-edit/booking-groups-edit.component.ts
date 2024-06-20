import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { HotelplanService } from '../../../../core/services/hotelplan.service';
import { CompanyService } from '../../../../core/services/company.service';
import { CityService } from '../../../../core/services/city.service';
import { StateService } from '../../../../core/services/state.service';
import { CountryService } from '../../../../core/services/country.service';
import { AirlineService } from '../../../../core/services/airline.service';
import { AgencyService } from '../../../../core/services/agency.service';
import { BookingGroupService } from '../../../../core/services/booking-group.service';
import { Select } from '../../../../models/forms/select';
import { Subscription } from 'rxjs';
import { format, addDays, differenceInDays, addMonths } from 'date-fns';
import { validateDateRange } from '../../../../core/custom-validators/validateDateRange';
import { BookingGroup } from '../../../../models/entities/bookings/bookinggroup';
import { Company } from '../../../../models/entities/companies/companies';
import { Response } from '../../../../models/api/response';
import { Country } from '../../../../models/entities/countries/countries';
import { State } from '../../../../models/entities/states/states';
import { City } from '../../../../models/entities/cities/cities';
import { HotelPlan } from '../../../../models/entities/hotelplans/hotelplans';
import { Agency } from '../../../../models/entities/agencies/agencies';
import { Airline } from '../../../../models/entities/airlines/airlines';

@Component({
  selector: 'Ffr-booking-groups-edit',
  standalone: true,
  imports: [RouterModule, MenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './booking-groups-edit.component.html',
  styleUrl: './booking-groups-edit.component.scss',
})
export class BookingGroupsEditComponent {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private hotelplanService: HotelplanService,
    private companyService: CompanyService,
    private cityService: CityService,
    private stateService: StateService,
    private countryService: CountryService,
    private airlineService: AirlineService,
    private agencyService: AgencyService,
    private bookingGroupService: BookingGroupService,
    private router: Router
  ) {
    this.form = this.getForm();
    this.hotelplansSelectData = [];
    this.companySelectData = [];
    this.countriesSelectData = [];
    this.statesSelectData = [];
    this.citiesSelectData = [];
    this.airlinesSelectData = [];
    this.agenciesSelectData = [];
    this.guaranteesSelectData = [];
    this.contactMethodsSelectData = [];
    this.depositsSelectData = [];
    this.travelPurposesSelectData = [];
    this.ratesSelectData = [];
    this.currenciesSelectData = [];
    this.reservationStatusesSelectData = [];
  }

  id: number = 0;

  hotelplansSelectData: Select[];
  companySelectData: Select[];
  countriesSelectData: Select[];
  statesSelectData: Select[];
  citiesSelectData: Select[];
  airlinesSelectData: Select[];
  guaranteesSelectData: Select[];
  agenciesSelectData: Select[];
  contactMethodsSelectData: Select[];
  depositsSelectData: Select[];
  travelPurposesSelectData: Select[];
  ratesSelectData: Select[];
  currenciesSelectData: Select[];
  reservationStatusesSelectData: Select[];

  form: FormGroup;
  arrivalDateValueChangeSubscription?: Subscription;
  departureDateValueChangeSubscription?: Subscription;

  getForm(): FormGroup {
    const today: Date = new Date();
    const departureDate: Date = addDays(today, 1);
    const numberOfNights: number = differenceInDays(departureDate, today);
    const guaranteeDate: Date = addMonths(today, 1);
    return this.formBuilder.group(
      {
        bookingId: 0,
        hotelPlanId: [0, [Validators.required, Validators.min(1)]],
        hotelPlanName: ['', Validators.required],
        companyId: [0, [Validators.required, Validators.min(1)]],
        companyName: ['', Validators.required],
        companyAddress: ['', Validators.required],
        companyPhone: ['', Validators.required],
        companyEmail: ['', Validators.required],
        contactName: ['', Validators.required],
        contactWorkPosition: ['', Validators.required],
        contactMethodId: [0, [Validators.required, Validators.min(1)]],
        contactMethodName: ['', Validators.required],
        segment01: ['', Validators.required],
        segment02: ['', Validators.required],
        segment03: ['', Validators.required],
        transport: ['', Validators.required],
        airlineId: [0, [Validators.required, Validators.min(1)]],
        airlineName: ['', Validators.required],
        flight: ['', Validators.required],
        countryId: [0, [Validators.required, Validators.min(1)]],
        countryName: ['', Validators.required],
        stateId: [0, [Validators.required, Validators.min(1)]],
        stateName: ['', Validators.required],
        cityId: [0, [Validators.required, Validators.min(1)]],
        cityName: ['', Validators.required],
        allot: [false],
        grp: [false],
        quotationDate: [format(today, 'yyyy-MM-dd'), Validators.required],
        arrivalDate: [format(today, 'yyyy-MM-dd'), Validators.required],
        departureDate: [
          format(departureDate, 'yyyy-MM-dd'),
          Validators.required,
        ],
        numberOfNights: [
          numberOfNights,
          [Validators.required, Validators.min(0)],
        ],
        guaranteeDate: [
          format(guaranteeDate, 'yyyy-MM-dd'),
          Validators.required,
        ],
        guaranteeId: [0, [Validators.required, Validators.min(1)]],
        guaranteeName: ['', Validators.required],
        depositId: [0, [Validators.required, Validators.min(1)]],
        depositName: ['', Validators.required],
        travelPurposeId: [0, [Validators.required, Validators.min(1)]],
        travelPurposeName: ['', Validators.required],
        agencyId: [0, [Validators.required, Validators.min(1)]],
        agencyName: ['', Validators.required],
        commissionable: [false],
        rateId: [0, [Validators.required, Validators.min(1)]],
        rateName: ['', Validators.required],
        currencyId: [0, [Validators.required, Validators.min(1)]],
        currencyName: ['', Validators.required],
        reservationStatusId: [0, [Validators.required, Validators.min(1)]],
        reservationStatusName: ['', Validators.required],
        masterFolio: [0, Validators.required],
        hideRate: [false],
        discount: [false],
        rateToCharge: [0, Validators.required],
        packageDiscount: [0, Validators.required],
        accountingAccountId: 0,
        accountingAccountName: '',
        complex: ['', Validators.required],

        //cityId: null,
        //name: ['', Validators.required],
        //countryId: [0, Validators.required],
        //stateId: [0, Validators.required]
      },
      {
        validators: [
          validateDateRange('departureDate', 'arrivalDate'),
          validateDateRange('guaranteeDate', 'quotationDate'),
        ],
      }
    );
  }

  async ngOnInit(): Promise<void> {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);   

    this.hotelplansSelectData = await this.hotelplanService.getDataForSelect();
    this.companySelectData = await this.companyService.getDataForSelect();
    this.airlinesSelectData = await this.airlineService.getDataForSelect();
    this.countriesSelectData = await this.countryService.getDataForSelect();
    this.agenciesSelectData = await this.agencyService.getDataForSelect();
    this.guaranteesSelectData = [
      { value: 1, text: 'Carta empresarial' },
      { value: 2, text: 'Tarjeta de crédito' },
      { value: 3, text: 'Transferencia' },
      { value: 4, text: 'Otro' },
    ];
    this.contactMethodsSelectData = [
      { value: 1, text: 'Email' },
      { value: 2, text: 'Otro' },
    ];
    this.depositsSelectData = [
      { value: 1, text: 'Equitativo' },
      { value: 2, text: 'Otro' },
    ];
    this.travelPurposesSelectData = [
      { value: 1, text: 'Negocios' },
      { value: 2, text: 'Otro' },
    ];
    this.ratesSelectData = [
      { value: 1, text: 'Tarifa' },
      { value: 2, text: 'Otro' },
    ];
    this.currenciesSelectData = [
      { value: 1, text: 'Pesos (COP)' },
      { value: 2, text: 'Dolares (USD)' },
      { value: 3, text: 'Otro' },
    ];
    this.reservationStatusesSelectData = [
      { value: 1, text: 'Garantizado' },
      { value: 2, text: 'Tentativo' },
      { value: 3, text: 'Cancelado' },
      { value: 4, text: 'Otro' },
    ];

    this.arrivalDateValueChangeSubscription = this.form
      .get('arrivalDate')
      ?.valueChanges.subscribe(async (value) => {
        this.form.patchValue({
          numberOfNights: await this.getNumberOfNights(
            this.form.get('arrivalDate')?.value,
            this.form.get('departureDate')?.value
          ),
        });
      });

    this.departureDateValueChangeSubscription = this.form
      .get('departureDate')
      ?.valueChanges.subscribe(async (value) => {
        this.form.patchValue({
          numberOfNights: await this.getNumberOfNights(
            this.form.get('arrivalDate')?.value,
            this.form.get('departureDate')?.value
          ),
        });
      });

    const data: BookingGroup = (await this.bookingGroupService.get(this.id))
      .data;
    
    this.form.patchValue(data);
    
    this.form.patchValue({
      quotationDate: format(data.quotationDate, 'yyyy-MM-dd'),
      arrivalDate: format(data.arrivalDate, 'yyyy-MM-dd'),
      departureDate: format(data.departureDate, 'yyyy-MM-dd'),
      guaranteeDate: format(data.guaranteeDate, 'yyyy-MM-dd')
    });

    this.statesSelectData = await this.stateService.getDataForSelectByCountryId(
      data.countryId
    );

    this.citiesSelectData = await this.cityService.getDataForSelectByStateId(
      data.stateId
    );

  }

  async ngOnDestroy(): Promise<void> {
    //this.arrivalDateValueChangeSubscription!.unsubscribe();
    //this.departureDateValueChangeSubscription!.unsubscribe();
  }

  async onCompanyChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;

    if (info.companyId == 0)
      return;    

    const responseData: Response<Company> = await this.companyService.get(
      info.companyId
    );

    this.form.patchValue({
      companyAddress: responseData.data.address,
      companyPhone: responseData.data.phone,
      companyEmail: responseData.data.email,
      companyName: responseData.data.name,
    });
  }

  async onCountryChange(event: Event): Promise<void> {
    const info: Country = this.form.value;
    this.statesSelectData = await this.stateService.getDataForSelectByCountryId(
      info.countryId
    );

    const data = this.countriesSelectData.filter(
      (r) => r.value == info.countryId
    );

    if (data.length > 0) {
      this.form.patchValue({
        countryName: data[0].text,
      });
    }
  }

  async onStateChange(event: Event): Promise<void> {
    const info: State = this.form.value;
    this.citiesSelectData = await this.cityService.getDataForSelectByStateId(
      info.stateId
    );

    const data = this.statesSelectData.filter((r) => r.value == info.stateId);

    if (data.length > 0) {
      this.form.patchValue({
        stateName: data[0].text,
      });
    }
  }

  async onCityChange(event: Event): Promise<void> {
    const info: City = this.form.value;
    const data = this.citiesSelectData.filter((r) => r.value == info.cityId);

    if (data.length > 0) {
      this.form.patchValue({
        cityName: data[0].text,
      });
    }
  }

  async onHotelPlanChange(event: Event): Promise<void> {
    const info: HotelPlan = this.form.value;
    const data = this.hotelplansSelectData.filter(
      (r) => r.value == info.hotelPlanId
    );

    if (data.length > 0) {
      this.form.patchValue({
        hotelPlanName: data[0].text,
      });
    }
  }

  async onAgencyChange(event: Event): Promise<void> {
    const info: Agency = this.form.value;
    const data = this.agenciesSelectData.filter(
      (r) => r.value == info.agencyId
    );

    if (data.length > 0) {
      this.form.patchValue({
        agencyName: data[0].text,
      });
    }
  }

  async onAirlineChange(event: Event): Promise<void> {
    const info: Airline = this.form.value;
    const data = this.airlinesSelectData.filter(
      (r) => r.value == info.airlineId
    );

    if (data.length > 0) {
      this.form.patchValue({
        airlineName: data[0].text,
      });
    }
  }

  async onContactMethodChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.contactMethodsSelectData.filter(
      (r) => r.value == info.contactMethodId
    );

    if (data.length > 0) {
      this.form.patchValue({
        contactMethodName: data[0].text,
      });
    }
  }

  async onGuaranteeChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.guaranteesSelectData.filter(
      (r) => r.value == info.guaranteeId
    );

    if (data.length > 0) {
      this.form.patchValue({
        guaranteeName: data[0].text,
      });
    }
  }

  async onDepositChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.depositsSelectData.filter(
      (r) => r.value == info.depositId
    );

    if (data.length > 0) {
      this.form.patchValue({
        depositName: data[0].text,
      });
    }
  }

  async onTravelPurposeChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.travelPurposesSelectData.filter(
      (r) => r.value == info.travelPurposeId
    );

    if (data.length > 0) {
      this.form.patchValue({
        travelPurposeName: data[0].text,
      });
    }
  }

  async onRateChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.ratesSelectData.filter((r) => r.value == info.rateId);

    if (data.length > 0) {
      this.form.patchValue({
        rateName: data[0].text,
      });
    }
  }

  async onCurrencyChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.currenciesSelectData.filter(
      (r) => r.value == info.currencyId
    );

    if (data.length > 0) {
      this.form.patchValue({
        currencyName: data[0].text,
      });
    }
  }

  async onReservationStatusesChange(event: Event): Promise<void> {
    const info: BookingGroup = this.form.value;
    const data = this.reservationStatusesSelectData.filter(
      (r) => r.value == info.reservationStatusId
    );

    if (data.length > 0) {
      this.form.patchValue({
        reservationStatusName: data[0].text,
      });
    }
  }

  async getNumberOfNights(
    arrivalDate: Date,
    departureDate: Date
  ): Promise<number> {
    return differenceInDays(departureDate, arrivalDate);
  }

  async onSave(event: Event, form: FormGroup): Promise<void> {
    event.preventDefault();

    const info: BookingGroup = form.value;

    await this.save(info);
  }

  async save(info: BookingGroup): Promise<void> {
    this.bookingGroupService
      .add(
        info.hotelPlanId,
        info.hotelPlanName,
        info.companyId,
        info.companyName,
        info.companyAddress,
        info.companyPhone,
        info.companyEmail,
        info.contactName,
        info.contactWorkPosition,
        info.contactMethodId,
        info.contactMethodName,
        info.segment01,
        info.segment02,
        info.segment03,
        info.transport,
        info.airlineId,
        info.airlineName,
        info.flight,
        info.countryId,
        info.countryName,
        info.stateId,
        info.stateName,
        info.cityId,
        info.cityName,
        info.allot,
        info.grp,
        info.quotationDate,
        info.arrivalDate,
        info.departureDate,
        info.numberOfNights,
        info.guaranteeDate,
        info.guaranteeId,
        info.guaranteeName,
        info.depositId,
        info.depositName,
        info.travelPurposeId,
        info.travelPurposeName,
        info.agencyId,
        info.agencyName,
        info.commissionable,
        info.rateId,
        info.rateName,
        info.currencyId,
        info.currencyName,
        info.reservationStatusId,
        info.reservationStatusName,
        info.reservationId,
        info.masterFolio,
        info.hideRate,
        info.discount,
        info.rateToCharge,
        info.packageDiscount,
        info.accountingAccountId,
        info.accountingAccountName,
        info.complex,
        info.hotelId
      )
      .subscribe(
        (responseSuccess: Response<boolean>) => {
          const message = Object.entries(responseSuccess.messages)
            .map(([key, value]) => `${value}`)
            .join(' ');

          alert(message);
          this.router.navigateByUrl('/booking/groups');
          //this.snackbarService.openSuccess(message, 'close');
        },
        (responseError: any) => {
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
