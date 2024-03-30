import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class utils {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getFromLocalStorage(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          return JSON.parse(item);
        }
        return item;
      } catch (error) {
        console.error('Error al recuperar datos del localStorage:', error);
        return null;
      }
    }
  }
}
