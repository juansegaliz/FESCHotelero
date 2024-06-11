import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Airline } from '../../../models/entities/airlines/airlines';
import { Observable } from 'rxjs';
import { Response } from '../../../models/api/response';

@Injectable({
  providedIn: 'root'
})
export class HttpAirlinesService {

  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<Airline[]>> {
    return this.httpClient.get<Response<Airline[]>>(`${this.serverUrl}/airlines`);
  }
  
  post(info: Airline): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/airlines`, info);
  }
  
  get(id: number): Observable<Response<Airline>> {
    return this.httpClient.get<Response<Airline>>(`${this.serverUrl}/airlines/${id}`);
  }
  
  put(id: number, info: Airline): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/airlines/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/airlines/${id}`);
  }
}
