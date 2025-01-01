import { USER_ROLE } from './user.constant';

export type TUser = {
  id: string;
  password?: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'faculty' | 'student';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
