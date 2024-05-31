import { Component } from '@angular/core';
import { MenuComponent } from "../../../components/menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'Ffr-booking-groups',
    standalone: true,
    templateUrl: './booking-groups.component.html',
    styleUrl: './booking-groups.component.scss',
    imports: [RouterLink, MenuComponent]
})
export class BookingGroupsComponent {

}
