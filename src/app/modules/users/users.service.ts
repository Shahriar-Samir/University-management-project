import config from '../../config';
import { TStudent } from '../students/students.interface';
import { StudentModel } from '../students/students.model';
import User from './user.model';
import { TUser } from './users.interface';

const createStudentInDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.defaultPass as string);
  userData.role = 'student';
  userData.id = '12345';
  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
  return newUser;
};

export default {
  createStudentInDB,
};
