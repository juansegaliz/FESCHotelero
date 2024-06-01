import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { CityService } from '../../core/services/city.service';
import { City } from '../../models/entities/cities/cities';
import { Response } from '../../models/api/response';

@Component({
    selector: 'Ffr-cities',
    standalone: true,
    templateUrl: './cities.component.html',
    styleUrl: './cities.component.scss',
    imports: [RouterLink, MenuComponent, NgFor]
})
export class CitiesComponent {
  constructor(private cityService: CityService){}


  data: City[] = [];

  async ngOnInit() {
    this.setDataTable();
  }

  async setDataTable() {
    this.data = (await this.cityService.getAll()).data;
  }

  async onDelete(item: City) {
    if (confirm(`¿Deseas eliminar a '${item.name}'?`))
      await this.delete(item);
  }

  async delete(item: City) {
    this.cityService.delete(item.stateId).subscribe(
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
