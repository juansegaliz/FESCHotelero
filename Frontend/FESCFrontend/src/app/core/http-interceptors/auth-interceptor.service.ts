import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this.authService.getAccessToken();
    let headers = new HttpHeaders();

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }

    headers = headers.set(
      'Content-Type',
      request.body instanceof FormData ? 'multipart/form-data' : 'application/json'
    );

    request = request.clone({
      headers: headers,
    });

    return next.handle(request);
  }
}
