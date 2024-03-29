import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string) {
    let response: T = undefined as any;

    this.http.get<T>(url).subscribe((data: T) => {
      response = data;
    });

    return response;
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
