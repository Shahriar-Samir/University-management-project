import express from 'express';
import academicDepartmentController from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createAcademicDepartmentValidationSchema } from './academicDepartment.validation';

const router = express.Router();

router.get('/', academicDepartmentController.getAllAcademicDepartment);
router.get(
  '/:departmentId',
  academicDepartmentController.getSingleAcademicDepartment,
);
router.post(
  '/create-academic-department',
  validateRequest(createAcademicDepartmentValidationSchema),
  academicDepartmentController.createAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(createAcademicDepartmentValidationSchema),
  academicDepartmentController.updateSingleAcademicDepartment,
);

const academicDepartmentRoutes = router;

export default academicDepartmentRoutes;
