import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpService } from './core/services/http.service';
import { CommonModule } from '@angular/common';
import { usuario } from './models/entity/usuario';

@Component({
  selector: 'Ffr-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fesc Hotelero';
  usuario: usuario = {};
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    interface pokemon {
      abilities: any;
    }
    const responsedos = this.httpService.get<usuario>(
      'https://pokeapi.co/api/v2/pokemon/ditto'
    );

    if (responsedos) {
      responsedos.subscribe((data) => {
        console.log(data);
        this.usuario = data;
      });
    }
  }
}
