import { TAcademicSemester } from './academicSemester.interface';
import AcademicSemesterModel from './academicSemester.model';

const createAcademicSemesterInDB = async (payload: TAcademicSemester) => {
  

  const result = await AcademicSemesterModel.create(payload);
  return result;
};

export default {
  createAcademicSemesterInDB,
};
