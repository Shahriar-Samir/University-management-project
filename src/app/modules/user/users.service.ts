import config from '../../config';
import AcademicSemesterModel from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/students.interface';
import { StudentModel } from '../student/students.model';
import User from './user.model';
import { TUser } from './users.interface';
import { generateStudentId } from './users.utils';

const createStudentInDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.defaultPass as string);
  userData.role = 'student';

  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  userData.id = await generateStudentId(admissionSemester);

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
  return newUser;
};

export default {
  createStudentInDB,
};
