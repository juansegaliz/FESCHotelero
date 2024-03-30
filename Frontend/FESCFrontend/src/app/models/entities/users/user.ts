export interface User {
  userId: number;
  email: string;
  fullName: string;
  roleId?: number;
  departmentId?: number;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  createdByUserId: number;
  updatedByUserId: number;
  statusId: number;
}
