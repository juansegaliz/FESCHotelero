import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { NgFor } from '@angular/common';
import { AgencyService } from '../../core/services/agency.service';
import { Agency } from '../../models/entities/agencies/agencies';
import { Response } from '../../models/api/response';

@Component({
  selector: 'Ffr-agencies',
  standalone: true,
  imports: [RouterModule, MenuComponent, NgFor],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.scss'
})
export class AgenciesComponent implements OnInit {
  constructor(private agenciesService: AgencyService){}

  data: Agency[] = [];

  async ngOnInit() {
    this.setDataTable();
  }

  async setDataTable() {
    this.data = (await this.agenciesService.getAll()).data;
  }

  async onDelete(item: Agency) {
    if (confirm(`¿Deseas eliminar a '${item.name}'?`))
      await this.delete(item);
  }

  async delete(item: Agency) {
    this.agenciesService.delete(item.countryId).subscribe(
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
