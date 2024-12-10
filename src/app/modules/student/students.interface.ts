import { ObjectId, Types } from 'mongoose';
import { ObjectId } from 'mongoose';

export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TStudentName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TlocalGurdian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TStudentName;
  gender: 'male' | 'female';
  dateOfBirth?: Date;
  contactNo: string;
  emergencyContactNo: string;
  email: string;
  presentAddress: string;
  permanentAddress: string;
  gurdian: TGurdian;
  localGurdian: TlocalGurdian;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
  isDeleted: boolean;
};
