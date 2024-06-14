import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/api/response';
import { Company } from '../../../models/entities/companies/companies';

@Injectable({
  providedIn: 'root'
})
export class HttpCompaniesService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<Company[]>> {
    return this.httpClient.get<Response<Company[]>>(`${this.serverUrl}/companies`);
  }
  
  post(info: Company): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/companies`, info);
  }
  
  get(id: number): Observable<Response<Company>> {
    return this.httpClient.get<Response<Company>>(`${this.serverUrl}/companies/${id}`);
  }
  
  put(id: number, info: Company): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/companies/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/companies/${id}`);
  }
}
