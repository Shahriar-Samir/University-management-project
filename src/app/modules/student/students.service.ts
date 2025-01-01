import mongoose from 'mongoose';
import { StudentType } from './students.interface';
import { StudentModel } from './students.model';
import User from '../user/user.model';
import { AppError } from '../../errors/appError';

const createStudentIntoDB = async (studentData: StudentType) => {
  // built in static method
  // const result = await StudentModel.create(student);

  const student = new StudentModel(studentData);

  const result = await student.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: number) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const updateStudentIntoDB = async (id: number) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const deleteSingleStudentFromDB = async (id: number) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const isUserExist = await StudentModel.findOne({ id });
    console.log(isUserExist);
    if (isUserExist === null) {
      console.log('dsf');
      throw new AppError(404, 'User does not exist');
    }
    const studentDeleted = await StudentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!studentDeleted) {
      throw new AppError(400, 'Failed to delete student');
    }
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(400, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return studentDeleted;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw err;
  }
};

export default {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
