import { TAcademicFaculty } from './academicFaculty.interface';
import AcademicFacultyModel from './academicFaculty.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};

const updateSingleAcademicFacultyIntoDB = async (id:string,payload:any)=>{
    const result = await AcademicFacultyModel.updateOne({_id:id},payload);
    return result;
}

const academicFacultyService = {
    createAcademicSemesterIntoDB,
    getAllAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB,
    updateSingleAcademicFacultyIntoDB
  };

export default academicFacultyService
