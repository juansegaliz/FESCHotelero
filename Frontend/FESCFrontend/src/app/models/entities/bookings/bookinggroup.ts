export interface BookingGroup {
  bookingId: number;

  hotelPlanId: number;
  hotelPlanName: string;

  companyId: number;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  contactName: string;
  contactWorkPosition: string;

  contactMethodId: number;
  contactMethodName: string;

  segment01: string;
  segment02: string;
  segment03: string;

  transport: string;
  airlineId: number;
  airlineName: string;

  flight: string;

  countryId: number;
  countryName: string;
  stateId: number;
  stateName: string;
  cityId: number;
  cityName: string;
  allot: boolean;
  grp: boolean;

  quotationDate: Date;
  arrivalDate: Date;
  departureDate: Date;
  numberOfNights: number;
  guaranteeDate: Date;

  guaranteeId: number;
  guaranteeName: string;

  depositId: number;
  depositName: string;

  travelPurposeId: number;
  travelPurposeName: string;

  agencyId: number;
  agencyName: string;

  commissionable: boolean;

  rateId: number;
  rateName: string;
  currencyId: number;
  currencyName: string;
  reservationStatusId: number;
  reservationStatusName: string;
  reservationId: number;
  masterFolio: number;
  hideRate: boolean;


  discount: boolean;
  rateToCharge: number;
  packageDiscount: number;
  accountingAccountId: number;
  accountingAccountName: string;
  complex: string;

  createdAt: Date;
  updatedAt: Date;
  createdByUserId: number;
  updatedByUserId: number;
  statusId: number;
  hotelId: number;
}
