import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpUsersService } from './core/services/http/http-users.service';

@Component({
  selector: 'Ffr-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fesc Hotelero';
  usuario: any = {};

  constructor(private httpUserService: HttpUsersService) {}

  ngOnInit() {
    interface pokemon {
      abilities: any;
    }
    const responsedos = this.httpUserService.getAll();

    if (responsedos) {
      responsedos.subscribe((data) => {
        console.log(data);
        this.usuario = data;
      });
    }
  }
}
