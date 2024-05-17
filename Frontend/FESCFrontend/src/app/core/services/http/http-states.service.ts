import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { State } from '../../../models/entities/states/states';
import { Response } from '../../../models/api/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpStatesService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }

  getAllByCountryId(countryId: number): Observable<Response<State[]>> {
    return this.httpClient.get<Response<State[]>>(`${this.serverUrl}/countries/${countryId}/states`);
  }

  getAll(): Observable<Response<State[]>> {
    return this.httpClient.get<Response<State[]>>(`${this.serverUrl}/states`);
  }
  
  post(info: State): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/states`, info);
  }
  
  get(id: number): Observable<Response<State>> {
    return this.httpClient.get<Response<State>>(`${this.serverUrl}/states/${id}`);
  }
  
  put(id: number, info: State): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/states/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/states/${id}`);
  }
}
