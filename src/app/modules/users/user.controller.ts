import { RequestHandler } from 'express';
import usersService from './users.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await usersService.createStudentInDB(password, studentData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Student is created succesfully',
  });
});

export default {
  createStudent,
};
