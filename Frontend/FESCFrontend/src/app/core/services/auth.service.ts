import { Injectable } from '@angular/core';
import { getFromLocalStorage } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  getAccessToken() {
    return getFromLocalStorage('sessionToken');
  }

  isAuthenticated() {
    return false;
  }
}
