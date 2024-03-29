import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './core/http-interceptors/auth-interceptor.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
