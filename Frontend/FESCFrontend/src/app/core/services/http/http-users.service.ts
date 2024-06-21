import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/api/response';
import { environment } from '../../../../environment/environment';
import { User } from '../../../models/entities/users/user';
import { UserCreate } from '../../../models/entities/users/userCreate';

@Injectable({
  providedIn: 'root',
})

export class HttpUsersService {
  private serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Response<User[]>> {
    return this.httpClient.get<Response<User[]>>(`${this.serverUrl}/users`);
  }
  
  post(info: UserCreate): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(`${this.serverUrl}/users`, info);
  }
  
  get(id: number): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${this.serverUrl}/users/${id}`);
  }
  
  put(id: number, info: User): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(`${this.serverUrl}/users/${id}`, info);
  }
  
  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(`${this.serverUrl}/users/${id}`);
  }
  
  /*
  getTableview(): Observable<Response<User[]>> {
    return this.httpClient.get<Response<User[]>>(`${this.serverUrl}/bookinggroups/tableview`);
  }
    */
}
