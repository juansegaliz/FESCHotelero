import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { BookingGroup } from '../../../models/entities/bookings/bookinggroup';
import { Observable } from 'rxjs';
import { Response } from '../../../models/api/response';

@Injectable({
  providedIn: 'root'
})
export class HttpBookingGroupsService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<BookingGroup[]>> {
    return this.httpClient.get<Response<BookingGroup[]>>(`${this.serverUrl}/bookinggroups`);
  }
  
  post(info: BookingGroup): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/bookinggroups`, info);
  }
  
  get(id: number): Observable<Response<BookingGroup>> {
    return this.httpClient.get<Response<BookingGroup>>(`${this.serverUrl}/bookinggroups/${id}`);
  }
  
  put(id: number, info: BookingGroup): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/bookinggroups/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/bookinggroups/${id}`);
  }
  
  getTableview(): Observable<Response<BookingGroup[]>> {
    return this.httpClient.get<Response<BookingGroup[]>>(`${this.serverUrl}/bookinggroups/tableview`);
  }
}
