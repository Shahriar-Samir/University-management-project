import { StudentType } from './students.interface';
import { StudentModel } from './students.model';

const createStudentIntoDB = async (studentData: StudentType) => {
  // built in static method
  // const result = await StudentModel.create(student);

  const student = new StudentModel(studentData);

  const result = await student.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: number) => {
  const result = await StudentModel.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteSingleStudentFromDB = async (id: number) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export default {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
