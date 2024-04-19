import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'Ffr-home',
  standalone: true,
  imports: [CardComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
