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

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  latam: string = '../../../../assets/images/latam.png';
  avianca: string = '../../../../assets/images/AviancaWhite.png';
  hotel1: string = '../../../../assets/images/hotel1.png';
  hotel2: string = '../../../../assets/images/hotel2.png';
  hotel3: string = '../../../../assets/images/hotel3.png';
  hotelPlans: any[] = [];
  airlines: any[] = [];

  constructor(private backendService: BackendServiceService) {}

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
        this.airlines = data;
        console.log(this.airlines)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  detailHotelPlan(hotel: any) {
    console.log('Detalles del hotel:', hotel);
  }
}
