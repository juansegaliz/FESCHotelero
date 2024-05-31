import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { Response } from '../../../models/api/response';
import { Country } from '../../../models/entities/countries/countries';

@Injectable({
  providedIn: 'root'
})
export class HttpCountriesService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<Country[]>> {
    return this.httpClient.get<Response<Country[]>>(`${this.serverUrl}/countries`);
  }
  
  post(info: Country): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/countries`, info);
  }
  
  get(id: number): Observable<Response<Country>> {
    return this.httpClient.get<Response<Country>>(`${this.serverUrl}/countries/${id}`);
  }
  
  put(id: number, info: Country): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/countries/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/countries/${id}`);
  }
}
