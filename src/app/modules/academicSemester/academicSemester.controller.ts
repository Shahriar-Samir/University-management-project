import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import academicSemesterService from './academicSemester.service';

const createAcademicSemseter = catchAsync(
  async (req: Request, res: Response) => {
    await academicSemesterService.createAcademicSemesterInDB(req.body);
    sendResponse(res, {
      success: true,
      message: 'Academic semester is created successfully',
      statusCode: 200,
      data: 'sfd',
    });
  },
);

export default {
  createAcademicSemseter,
};
