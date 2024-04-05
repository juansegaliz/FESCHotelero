import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTE4MjY5MTUsImV4cCI6MTcxMTg0MTMxNSwibmJmIjoxNzExODI2OTE1LCJqdGkiOiJabTZlNkw3YU15QlgyTmhDIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1wcmVzYS5jb20ifQ.weUM2xss3CUSObnmcsf1cuHRCxMJvZuFoMjLvBSCzNk';

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq).pipe(
    catchError((err: any) => {
      return throwError(() => {
        return;
      });
    })
  );
};
