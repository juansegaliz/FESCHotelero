export interface UserCreate {
  userId: number;
  email: string;
  password: string;
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
