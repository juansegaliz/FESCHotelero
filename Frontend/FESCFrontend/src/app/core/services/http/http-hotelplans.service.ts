import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { HotelPlan } from '../../../models/entities/hotelplans/hotelplans';
import { Observable } from 'rxjs';
import { Response } from '../../../models/api/response';

@Injectable({
  providedIn: 'root'
})
export class HttpHotelplansService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<HotelPlan[]>> {
    return this.httpClient.get<Response<HotelPlan[]>>(`${this.serverUrl}/hotelplans`);
  }
  
  post(info: HotelPlan): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/hotelplans`, info);
  }
  
  get(id: number): Observable<Response<HotelPlan>> {
    return this.httpClient.get<Response<HotelPlan>>(`${this.serverUrl}/hotelplans/${id}`);
  }
  
  put(id: number, info: HotelPlan): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/hotelplans/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/hotelplans/${id}`);
  }
}
