import { Request, Response } from 'express';
import studentService from './students.service';
import studentValidationSchema from './students.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //data validation using zod
    const zodData = studentValidationSchema.parse(studentData);

    const result = await studentService.createStudentIntoDB(zodData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numId = parseInt(id);
    const result = await studentService.getSingleStudentFromDB(numId);
    res.status(200).json({
      success: true,
      message: 'Student data retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      err,
    });
  }
};

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numID = parseInt(id);
    const result = await studentService.deleteSingleStudentFromDB(numID);
    res.status(200).json({
      success: true,
      message: 'Student data deleted successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      err,
    });
  }
};

export default {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
