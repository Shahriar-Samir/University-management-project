import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import academicFacultyService from './acdemicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyService.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty is created successfully',
    data: result,
  });
});
const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await academicFacultyService.getAllAcademicFacultiesFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Academic faculty is retrieved successfully',
    data: result,
  });
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await academicFacultyService.getSingleAcademicFacultyFromDB(facultyId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty is retrieved successfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await academicFacultyService.updateSingleAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty is created successfully',
    data: result,
  });
});

export default {
  createAcademicFaculty,
  getSingleAcademicFaculty,
  getAllAcademicFaculties,
  updateAcademicFaculty,
};
