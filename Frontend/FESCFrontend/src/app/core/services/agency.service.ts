import { Injectable } from '@angular/core';
import { HttpAgenciesService } from './http/http-agencies.service';
import { Observable, lastValueFrom } from 'rxjs';
import { Response } from '../../models/api/response';
import { Agency } from '../../models/entities/agencies/agencies';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  constructor(private httpAgenciesService: HttpAgenciesService) {}

  add(
    name: string,
    description: string,
    email: string,
    phone: string,
    address: string,
    countryId: number,
    cityId: number,
    zip: string,
    hotelId: number
  ): Observable<Response<boolean>> {
    const info: Agency = {
      agencyId: 0,
      name: name,
      description: description,
      email: email,
      phone: phone,
      address: address,
      countryId: countryId,
      cityId: cityId,
      zip: zip,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1,
      hotelId: hotelId
    };

    return this.httpAgenciesService.post(info);
  }

  update(
    agencyId: number,
    name: string,
    description: string,
    email: string,
    phone: string,
    address: string,
    countryId: number,
    cityId: number,
    zip: string,
    hotelId: number
  ): Observable<Response<boolean>> {
    const info: Agency = {
      agencyId: agencyId,
      name: name,
      description: description,
      email: email,
      phone: phone,
      address: address,
      countryId: countryId,
      cityId: cityId,
      zip: zip,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1,
      hotelId: hotelId
    };
    return this.httpAgenciesService.put(agencyId, info);
  }

  delete(agencyId: number): Observable<Response<boolean>> {
    return this.httpAgenciesService.delete(agencyId);
  }

  async get(agencyId: number): Promise<Response<Agency>> {
    const response = await lastValueFrom(
      this.httpAgenciesService.get(agencyId)
    );
    return response;
  }

  async getAll(): Promise<Response<Agency[]>> {
    const response = await lastValueFrom(this.httpAgenciesService.getAll());
    return response;
  }
  /*
  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpAgenciesService.getAll());
    return response.data.map((item) => ({
      value: item.agencyid,
      text: item.name,
    }));
  }
  */
}
