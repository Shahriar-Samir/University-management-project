import { TAcademicDepartment } from './academicDepartment.interface';
import AcademicDepartment from './academicDepartment.model';

export const createAcademicDepartmentIntoDB = async (
  payload: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

export const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

export const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

export const updateSingleAcademicDepartmentFromDB = async (
  id: string,
  payload: any,
) => {
  const result = await AcademicDepartment.updateOne({ _id: id }, payload);
  return result;
};
