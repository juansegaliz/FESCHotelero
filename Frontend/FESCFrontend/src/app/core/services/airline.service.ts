import { Injectable } from '@angular/core';
import { HttpAirlinesService } from './http/http-airlines.service';
import { Observable, lastValueFrom } from 'rxjs';
import { Response } from '../../models/api/response';
import { Airline } from '../../models/entities/airlines/airlines';
import { Select } from '../../models/forms/select';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private httpAirlinesService: HttpAirlinesService) {}

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
    const info: Airline = {
      airlineId: 0,
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

    return this.httpAirlinesService.post(info);
  }

  update(
    airlineId: number,
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
    const info: Airline = {
      airlineId: airlineId,
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
    return this.httpAirlinesService.put(airlineId, info);
  }

  delete(airlineId: number): Observable<Response<boolean>> {
    return this.httpAirlinesService.delete(airlineId);
  }

  async get(airlineId: number): Promise<Response<Airline>> {
    const response = await lastValueFrom(
      this.httpAirlinesService.get(airlineId)
    );
    return response;
  }

  async getAll(): Promise<Response<Airline[]>> {
    const response = await lastValueFrom(this.httpAirlinesService.getAll());
    return response;
  }
  
  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpAirlinesService.getAll());
    return response.data.map((item) => ({
      value: item.airlineId,
      text: item.name,
    }));
  }
  
}
