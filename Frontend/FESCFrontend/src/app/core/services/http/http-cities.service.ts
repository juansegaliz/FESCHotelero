import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../../models/api/response';
import { City } from '../../../models/entities/cities/cities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCitiesService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<City[]>> {
    return this.httpClient.get<Response<City[]>>(`${this.serverUrl}/cities`);
  }
  
  post(info: City): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/cities`, info);
  }
  
  get(id: number): Observable<Response<City>> {
    return this.httpClient.get<Response<City>>(`${this.serverUrl}/cities/${id}`);
  }
  
  put(id: number, info: City): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/cities/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/cities/${id}`);
  }
}
