import { Injectable } from '@angular/core';
import { HttpCitiesService } from './http/http-cities.service';
import { Observable, lastValueFrom } from 'rxjs';
import { Response } from '../../models/api/response';
import { City } from '../../models/entities/cities/cities';
import { Select } from '../../models/forms/select';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpCitiesService: HttpCitiesService) { }

  add(name: string, countryId: number, stateId: number): Observable<Response<boolean>> {
    const info: City = {
      cityId: 0,
      name: name,
      countryId: countryId,
      stateId: stateId,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpCitiesService.post(info);
  }

  update(cityId: number, name: string, countryId: number, stateId: number): Observable<Response<boolean>> {
    const info: City = {
      cityId: cityId,
      name: name,
      countryId: countryId,
      stateId: stateId,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpCitiesService.put(cityId, info);
  }

  delete(cityId: number): Observable<Response<boolean>> {
    return this.httpCitiesService.delete(cityId);
  }
  
  async get(cityId: number): Promise<Response<City>> {
    const response = await lastValueFrom(this.httpCitiesService.get(cityId));
    return response;
  }

  async getAll(): Promise<Response<City[]>> {
    const response = await lastValueFrom(this.httpCitiesService.getAll());
    return response;
  }
  
  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpCitiesService.getAll());
    return response.data.map(item => ({
      value: item.stateId,
      text: item.name
    }));
  }
}
