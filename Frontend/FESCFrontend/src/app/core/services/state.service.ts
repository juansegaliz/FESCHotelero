import { Injectable } from '@angular/core';
import { HttpStatesService } from './http/http-states.service';
import { Observable, lastValueFrom } from 'rxjs';
import { Response } from '../../models/api/response';
import { State } from '../../models/entities/states/states';
import { Select } from '../../models/forms/select';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private httpStatesService: HttpStatesService) { }

  add(name: string, countryId: number): Observable<Response<boolean>> {
    const info: State = {
      stateId: 0,
      name: name,
      countryId: countryId,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpStatesService.post(info);
  }

  update(stateId: number, name: string, countryId: number): Observable<Response<boolean>> {
    const info: State = {
      stateId: stateId,
      name: name,
      countryId: countryId,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpStatesService.put(stateId, info);
  }

  delete(stateId: number): Observable<Response<boolean>> {
    return this.httpStatesService.delete(stateId);
  }
  
  async get(stateId: number): Promise<Response<State>> {
    const response = await lastValueFrom(this.httpStatesService.get(stateId));
    return response;
  }

  async getAll(): Promise<Response<State[]>> {
    const response = await lastValueFrom(this.httpStatesService.getAll());
    return response;
  }

  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpStatesService.getAll());
    return response.data.map(item => ({
      value: item.stateId,
      text: item.name
    }));
  }
  
  async getDataForSelectByCountryId(countryId: number): Promise<Select[]> {
    const response = await lastValueFrom(this.httpStatesService.getAllByCountryId(countryId));
    return response.data.map(item => ({
      value: item.stateId,
      text: item.name
    }));
  }
}
