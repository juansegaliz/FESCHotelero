import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/api/response';
import { environment } from '../../../../environment/environment';
import { User } from '../../../models/entities/users/user';

@Injectable({
  providedIn: 'root',
})

export class HttpUsersService {
  private serverUrl = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Response<User[]>> {
    return this.httpClient.get<Response<User[]>>(`${this.serverUrl}/clients`);
  }

  post(info: User): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>(
      `${this.serverUrl}/clients`,
      info
    );
  }

  get(id: number): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(
      `${this.serverUrl}/clients/${id}`
    );
  }

  put(id: number, info: User): Observable<Response<boolean>> {
    return this.httpClient.put<Response<boolean>>(
      `${this.serverUrl}/clients/${id}`,
      info
    );
  }

  delete(id: number): Observable<Response<boolean>> {
    return this.httpClient.delete<Response<boolean>>(
      `${this.serverUrl}/clients/${id}`
    );
  }
}
