import {
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getAccessToken();

    const cloneRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer' + token,
        'Content-Type':
          req.body instanceof FormData
            ? 'multipart/form-data'
            : 'application/json',
      },
    });

    return next.handle(cloneRequest);
  }
}
