import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { Country } from '../../models/entities/countries/countries';
import { CountryService } from '../../core/services/country.service';
import { Response } from '../../models/api/response';

@Component({
  selector: 'Ffr-countries',
  standalone: true,
  imports: [RouterModule, MenuComponent, NgFor],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  constructor(private countriesService: CountryService){}


  data: Country[] = [];

  async ngOnInit() {
    this.setDataTable();
  }

  async setDataTable() {
    this.data = (await this.countriesService.getAll()).data;
  }

  async onDelete(item: Country) {
    if (confirm(`¿Deseas eliminar a '${item.name}'?`))
      await this.delete(item);
  }

  async delete(item: Country) {
    this.countriesService.delete(item.countryId).subscribe(
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
