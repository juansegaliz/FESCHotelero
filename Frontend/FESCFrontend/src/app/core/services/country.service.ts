import { Injectable } from '@angular/core';
import { HttpCountriesService } from './http/http-countries.service';
import { lastValueFrom, Observable } from 'rxjs';
import { Response } from '../../models/api/response';
import { Country } from '../../models/entities/countries/countries';
import { Select } from '../../models/forms/select';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpCountriesService: HttpCountriesService) { }

  add(name: string, code: string): Observable<Response<boolean>> {
    const info: Country = {
      countryId: 0,
      name: name,
      code: code,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpCountriesService.post(info);
  }

  update(countryId: number, name: string, code: string): Observable<Response<boolean>> {
    const info: Country = {
      countryId: countryId,
      name: name,
      code: code,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpCountriesService.put(countryId, info);
  }

  delete(countryId: number): Observable<Response<boolean>> {
    return this.httpCountriesService.delete(countryId);
  }
  
  async get(countryId: number): Promise<Response<Country>> {
    const response = await lastValueFrom(this.httpCountriesService.get(countryId));
    return response;
  }

  async getAll(): Promise<Response<Country[]>> {
    const response = await lastValueFrom(this.httpCountriesService.getAll());
    return response;
  }
  
  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpCountriesService.getAll());
    return response.data.map(item => ({
      value: item.countryId,
      text: item.name
    }));
  }
}
