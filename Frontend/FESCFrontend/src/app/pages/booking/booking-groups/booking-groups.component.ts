import { Component } from '@angular/core';
import { MenuComponent } from "../../../components/menu/menu.component";
import { RouterLink, RouterModule } from '@angular/router';
import { BookingGroupService } from '../../../core/services/booking-group.service';
import { BookingGroup } from '../../../models/entities/bookings/bookinggroup';
import { Response } from '../../../models/api/response';
import { NgFor } from '@angular/common';
import { format, parseISO } from 'date-fns';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';

@Component({
    selector: 'Ffr-booking-groups',
    standalone: true,
    templateUrl: './booking-groups.component.html',
    styleUrl: './booking-groups.component.scss',
    imports: [RouterModule, MenuComponent, NgFor, DateFormatPipe],
})
export class BookingGroupsComponent {
    constructor(private bookingGroupService: BookingGroupService){}


    data: BookingGroup[] = [];
  
    async ngOnInit() {
      this.setDataTable();
    }

    async formatDate(dateString: string): Promise<string> {
        return format(parseISO(dateString), 'MMMM do, yyyy h:mm a');
    }
  
    async setDataTable() {
      this.data = (await this.bookingGroupService.getTableview()).data;
    }
  
    async onDelete(item: BookingGroup) {
      if (confirm(`¿Deseas eliminar la reserva # ${item.bookingId}, Empresa ${item.companyName}, Plan ${item.hotelPlanName}?`))
        await this.delete(item);
    }
  
    async delete(item: BookingGroup) {
      this.bookingGroupService.delete(item.countryId).subscribe(
        (responseSuccess: Response<boolean>) => {
          const message = Object.entries(responseSuccess.messages)
            .map(([key, value]) => `${value}`)
            .join(' ');
  
          //this.snackbarService.openSuccess(message, 'close');
        },
        (responseError: any) => {
          const data = responseError.error.errors || responseError.error.messages;
          const message = Object.entries(data)
            .map(([key, value]) => `${value}`)
            .join(' ');
  
          //this.snackbarService.openError(message, 'close');
        },
        async () => {
          await this.setDataTable();
        }
      );
    }
}
