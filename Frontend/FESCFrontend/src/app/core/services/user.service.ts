import { Injectable } from '@angular/core';
import { HttpUsersService } from './http/http-users.service';
import { User } from '../../models/entities/users/user';
import { Response } from '../../models/api/response';
import { Observable } from 'rxjs';
import { UserCreate } from '../../models/entities/users/userCreate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpUsersService: HttpUsersService) {}

  add(
    email: string,
    password: string,
    fullName: string,
    roleId: number,
    departmentId: number,
    phone: string
  ): Observable<Response<boolean>> {
    const info: UserCreate = {
      userId: 0,
      email: email,
      password: password,
      fullName: fullName,
      roleId: roleId,
      departmentId: departmentId,
      phone: phone,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpUsersService.post(info);
  }
  /*
  update(
    userId: number,
    email: string,
    fullName: string,
    roleId: number,
    departmentId: number,
    phone: string
  ): Observable<Response<boolean>> {
    const info: User = {
      userId: userId,
      email: email,
      fullName: fullName,
      roleId: roleId,
      departmentId: departmentId,
      phone: phone,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1
    };
    return this.httpUsersService.put(userId, info);
  }

  delete(bookingId: number): Observable<Response<boolean>> {
    return this.httpBookingGroupsService.delete(bookingId);
  }

  async get(bookingId: number): Promise<Response<BookingGroup>> {
    const response = await lastValueFrom(
      this.httpBookingGroupsService.get(bookingId)
    );
    return response;
  }

  async getAll(): Promise<Response<BookingGroup[]>> {
    const response = await lastValueFrom(this.httpBookingGroupsService.getAll());
    return response;
  }

  async getTableview(): Promise<Response<BookingGroup[]>> {
    const response = await lastValueFrom(this.httpBookingGroupsService.getTableview());
    return response;
  }
    */
  /*
  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpBookingGroupsService.getAll());
    return response.data.map((item) => ({
      value: item.bookingId,
      text: item.name,
    }));
  }
    */
}
