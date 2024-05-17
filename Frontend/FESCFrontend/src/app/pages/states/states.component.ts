import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { NgFor } from '@angular/common';
import { StateService } from '../../core/services/state.service';
import { State } from '../../models/entities/states/states';
import { Response } from '../../models/api/response';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'Ffr-states',
    standalone: true,
    templateUrl: './states.component.html',
    styleUrl: './states.component.scss',
    imports: [RouterModule, MenuComponent, NgFor]
})
export class StatesComponent {
  constructor(private statesService: StateService){}


  data: State[] = [];

  async ngOnInit() {
    this.setDataTable();
  }

  async setDataTable() {
    this.data = (await this.statesService.getAll()).data;
  }

  async onDelete(item: State) {
    if (confirm(`¿Deseas eliminar a '${item.name}'?`))
      await this.delete(item);
  }

  async delete(item: State) {
    this.statesService.delete(item.stateId).subscribe(
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
