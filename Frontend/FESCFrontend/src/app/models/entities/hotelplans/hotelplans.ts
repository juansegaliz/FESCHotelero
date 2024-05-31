export interface HotelPlan {
  hotelPlanId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdByUserId: number;
  updatedByUserId: number;
  statusId: number;
  hotelId: number;
}
