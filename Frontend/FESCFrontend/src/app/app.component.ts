import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpService } from './core/services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Ffr-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fesc Hotelero';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    interface pokemon {
      abilities: any;
    }
    const responsedos = this.httpService.get<pokemon>(
      'https://pokeapi.co/api/v2/pokemon/ditto'
    );

    console.log(responsedos);
  }
}
