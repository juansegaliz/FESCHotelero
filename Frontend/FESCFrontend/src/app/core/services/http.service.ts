import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get<T>(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      const options = this.getRequestOptions(null);
      return this.http.get<T>(url, options);
    }
    return new Observable<T>(); // Return an empty observable
  }

  post<T>(url: string, data: any) {
    if (isPlatformBrowser(this.platformId)) {
      const options = this.getRequestOptions(data);
      return this.http.post<T>(url, data, options);
    }
    return new Observable<T>(); // Return an empty observable

  }

  put<T>(url: string, data: any) {
    if (isPlatformBrowser(this.platformId)) {
      const options = this.getRequestOptions(data);
      return this.http.put<T>(url, data, options);
    }
    return new Observable<T>(); // Return an empty observable
  }

  delete<T>(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      const options = this.getRequestOptions(null);
      return this.http.delete<T>(url, options);
    }
    return new Observable<T>(); // Return an empty observable
  }

  private getRequestHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const accessToken = this.authService.getAccessToken();

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  }

  private getRequestOptions(data: any): { headers: HttpHeaders } {
    let headers = this.getRequestHeaders();
    const contentTypeHeader =
      data instanceof FormData ? 'multipart/form-data' : 'application/json';

    headers = headers.set('Content-Type', contentTypeHeader);

    return { headers };
  }
}
