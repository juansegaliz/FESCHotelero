import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { WorkspacecardComponent } from '../../components/workspacecard/workspacecard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Ffr-home',
  standalone: true,
  imports: [CardComponent, MenuComponent, WorkspacecardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
