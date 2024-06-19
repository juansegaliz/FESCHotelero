import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  hotel1: string = '../../../../assets/images/hotel1.png';
  hotel2: string = '../../../../assets/images/hotel2.png';
  hotel3: string = '../../../../assets/images/hotel3.png';

  constructor() {}

  ngOnInit() {}
}
