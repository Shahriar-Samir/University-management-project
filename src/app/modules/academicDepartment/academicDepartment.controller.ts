import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateSingleAcademicDepartmentFromDB,
} from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Academic department created successfully',
  });
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result = await getAllAcademicDepartmentsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'All academic departments retrieved successfully',
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await getSingleAcademicDepartmentFromDB(departmentId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Academic department retrieved successfully',
  });
});
const updateSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await updateSingleAcademicDepartmentFromDB(
    departmentId,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Academic department is updated successfully',
  });
});

export default {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateSingleAcademicDepartment,
};
