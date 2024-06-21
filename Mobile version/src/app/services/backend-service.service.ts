import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  private baseUrl = 'http://localhost:44388';

  constructor(private http: HttpClient) {}

  getHotelPlans(): Observable<any> {
    return this.http.get(`https://localhost:44388/HotelPlans`);
  }

  getAirlines(): Observable<any> {
    return this.http.get('https://localhost:44388/Airlines');
  }
}
