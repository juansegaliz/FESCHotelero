import { Injectable } from '@angular/core';
import { HttpHotelplansService } from './http/http-hotelplans.service';
import { Observable, lastValueFrom } from 'rxjs';
import { Response } from '../../models/api/response';
import { HotelPlan } from '../../models/entities/hotelplans/hotelplans';
import { Select } from '../../models/forms/select';

@Injectable({
  providedIn: 'root'
})
export class HotelplanService {
  constructor(private httpHotelplansService: HttpHotelplansService) { }

  add(name: string): Observable<Response<boolean>> {
    const info: HotelPlan = {
      hotelPlanId: 0,
      name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1,
      hotelId: 0
    };
    return this.httpHotelplansService.post(info);
  }

  update(hotelPlanId: number, name: string): Observable<Response<boolean>> {
    const info: HotelPlan = {
      hotelPlanId: hotelPlanId,
      name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1,
      hotelId: 0
    };
    return this.httpHotelplansService.put(hotelPlanId, info);
  }

  delete(hotelPlanId: number): Observable<Response<boolean>> {
    return this.httpHotelplansService.delete(hotelPlanId);
  }
  
  async get(hotelPlanId: number): Promise<Response<HotelPlan>> {
    const response = await lastValueFrom(this.httpHotelplansService.get(hotelPlanId));
    return response;
  }

  async getAll(): Promise<Response<HotelPlan[]>> {
    const response = await lastValueFrom(this.httpHotelplansService.getAll());
    return response;
  }
  
  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpHotelplansService.getAll());
    return response.data.map(item => ({
      value: item.hotelPlanId,
      text: item.name
    }));
  }
}
