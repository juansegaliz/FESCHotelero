import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { Response } from '../../../models/api/response';
import { Agency } from '../../../models/entities/agencies/agencies';

@Injectable({
  providedIn: 'root'
})
export class HttpAgenciesService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<Agency[]>> {
    return this.httpClient.get<Response<Agency[]>>(`${this.serverUrl}/agencies`);
  }
  
  post(info: Agency): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/agencies`, info);
  }
  
  get(id: number): Observable<Response<Agency>> {
    return this.httpClient.get<Response<Agency>>(`${this.serverUrl}/agencies/${id}`);
  }
  
  put(id: number, info: Agency): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/agencies/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/agencies/${id}`);
  }
}
