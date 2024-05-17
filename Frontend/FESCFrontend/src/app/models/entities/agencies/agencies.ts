export interface Agency {
  agencyId: number;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  countryId: number;
  cityId: number;
  zip: string;
  createdAt: Date;
  updatedAt: Date;
  createdByUserId: number;
  updatedByUserId: number;
  statusId: number;
  hotelId: number;
}
