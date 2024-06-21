import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BackendServiceService } from 'src/app/services/backend-service.service';

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
  selector: 'app-airlines',
  templateUrl: './airlines.page.html',
  styleUrls: ['./airlines.page.scss'],
})
export class AirlinesPage implements OnInit {
  @ViewChild('myModal') myModal?: ElementRef;

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

  latam: string = '../../../../assets/images/latam.png';
  avianca: string = '../../../../assets/images/AviancaWhite.png';
  americanAirlines: string = '../../../../assets/images/AmericanAirlines.jpg';
  deltaAirlines: string = '../../../../assets/images/DeltaAirlines.jpg';
  unitedAirlines: string = '../../../../assets/images/UnitedAirlines.png';

  constructor(
    private backendService: BackendServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAirlines();
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

  airlineDetails(airline: any) {
    this.myModal?.nativeElement.showModal();
    this.airlineDetail = airline;
    console.log('Detalles de aerolinea', airline);
  }

  backButton() {
    this.router.navigate(['/pages/dashboard/home']);
  }

  closeModal() {
    this.myModal?.nativeElement.close();
  }
}
