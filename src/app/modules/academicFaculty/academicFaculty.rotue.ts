import express from 'express';
import academicFacultyController from './academicFaculty.controller';
import academicFacultyValidation from './academicFaculty.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', academicFacultyController.getAllAcademicFaculties);
router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyValidation),
  academicFacultyController.createAcademicFaculty,
);

router.get('/:facultyId', academicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:facultyId',
  validateRequest(academicFacultyValidation.updateAcademicFacultyValidation),
  academicFacultyController.updateAcademicFaculty,
);

const academicFacultyRoutes = router;

export default academicFacultyRoutes;
