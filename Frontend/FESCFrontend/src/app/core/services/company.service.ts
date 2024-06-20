import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Response } from '../../models/api/response';
import { Company } from '../../models/entities/companies/companies';
import { HttpCompaniesService } from './http/http-companies.service';
import { Select } from '../../models/forms/select';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private httpCompaniesService: HttpCompaniesService) {}

  add(
    name: string,
    address: string,
    cityId: number,
    stateId: number,
    countryId: number,
    phone: string,
    email: string
  ): Observable<Response<boolean>> {
    const info: Company = {
      companyId: 0,
      name: name,
      address: address,
      cityId: cityId,
      stateId: stateId,
      countryId: countryId,
      phone: phone,
      email: email,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1,
      hotelId: 0,
    };
    return this.httpCompaniesService.post(info);
  }

  update(
    companyId: number,
    name: string,
    address: string,
    cityId: number,
    stateId: number,
    countryId: number,
    phone: string,
    email: string
  ): Observable<Response<boolean>> {
    const info: Company = {
      companyId: companyId,
      name: name,
      address: address,
      cityId: cityId,
      stateId: stateId,
      countryId: countryId,
      phone: phone,
      email: email,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdByUserId: 0,
      updatedByUserId: 0,
      statusId: 1,
      hotelId: 0,
    };
    return this.httpCompaniesService.put(companyId, info);
  }

  delete(companyId: number): Observable<Response<boolean>> {
    return this.httpCompaniesService.delete(companyId);
  }

  async get(companyId: number): Promise<Response<Company>> {
    console.log(companyId);
    const response = await lastValueFrom(
      this.httpCompaniesService.get(companyId)
    );
    return response;
  }

  async getAll(): Promise<Response<Company[]>> {
    const response = await lastValueFrom(this.httpCompaniesService.getAll());
    return response;
  }

  async getDataForSelect(): Promise<Select[]> {
    const response = await lastValueFrom(this.httpCompaniesService.getAll());
    return response.data.map((item) => ({
      value: item.companyId,
      text: item.name,
    }));
  }
}
