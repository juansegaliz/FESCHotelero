import { Injectable } from '@angular/core';
import { utils } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private funcionesUtiles: utils) {}

  getAccessToken() {
    return this.funcionesUtiles.getFromLocalStorage('sessionToken');
  }

  isAuthenticated() {
    return false;
  }
}
