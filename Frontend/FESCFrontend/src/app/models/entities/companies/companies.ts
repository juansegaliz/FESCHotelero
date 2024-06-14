export interface Company {
  companyId: number;
  name: string;
  address: string;
  cityId: number;
  stateId: number;
  countryId: number;
  phone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  createdByUserId: number;
  updatedByUserId: number;
  statusId: number;
  hotelId: number;
}
