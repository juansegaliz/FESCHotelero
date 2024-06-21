import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

interface HotelPlans {
  createdAt: Date;
  createdByUserId: number;
  hotelId: number;
  hotelPlanId: number;
  name: string;
  statusId: number;
  updatedAt: Date;
  updatedByUserId: number;
}

interface Airlines {
  address: string;
  airlineId: number;
  cityId: number;
  countryId: number;
  createdAt: Date;
  createdByUserId: number;
  description: string;
  email: string;
  hotelId: number;
  name: string;
  phone: string;
  statusId: number;
  updatedAt: Date;
  updatedByUserId: number;
  zip: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('myModal') myModal?: ElementRef;
  @ViewChild('myModalHotel') myModalHotel?: ElementRef;

  latam: string = '../../../../assets/images/latam.png';
  avianca: string = '../../../../assets/images/AviancaWhite.png';
  hotel1: string = '../../../../assets/images/hotel1.png';
  hotel2: string = '../../../../assets/images/hotel2.png';
  hotel3: string = '../../../../assets/images/hotel3.png';
  hotelPlans: any[] = [];
  hotelPlanDetail: HotelPlans = {
    createdAt: new Date(),
    createdByUserId: 0,
    hotelId: 0,
    hotelPlanId: 0,
    name: '',
    statusId: 0,
    updatedAt: new Date(),
    updatedByUserId: 0,
  };

  airlines: any[] = [];
  airlineDetail: Airlines = {
    address: '',
    airlineId: 0,
    cityId: 0,
    countryId: 0,
    createdAt: new Date(),
    createdByUserId: 0,
    description: '',
    email: '',
    hotelId: 0,
    name: '',
    phone: '',
    statusId: 0,
    updatedAt: new Date(),
    updatedByUserId: 0,
    zip: '',
  };

  constructor(
    private backendService: BackendServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHotel();
    this.getAirlines();
  }

  getHotel() {
    this.backendService.getHotelPlans().subscribe(
      (data) => {
        if (Array.isArray(data.data)) {
          this.hotelPlans = data.data;
        } else {
          this.hotelPlans = [data.data];
        }

        console.log(this.hotelPlans);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAirlines() {
    this.backendService.getAirlines().subscribe(
      (data) => {
        this.airlines = data.data;
        console.log(this.airlines);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  detailHotelPlan(hotel: any) {
    this.myModalHotel?.nativeElement.showModal();
    this.hotelPlanDetail = hotel;
    console.log('Detalles del hotel:', this.hotelPlanDetail);
  }

  airlineDetails(airline: any) {
    this.myModal?.nativeElement.showModal();
    this.airlineDetail = airline;
    console.log('Detalles de aerolinea', airline);
  }

  closeModal() {
    this.myModal?.nativeElement.close();
  }
  closeModalHotel() {
    this.myModalHotel?.nativeElement.close();
  }

  redirectToHotelPlans() {
    this.router.navigate(['/pages/dashboard/hotel-plans']);
  }

  redirectToAirlines() {
    this.router.navigate(['/pages/dashboard/airlines']);
  }
}
