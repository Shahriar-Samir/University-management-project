import express from 'express';
import userController from './user.controller';

import userValidation from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(userValidation.createUserValidationSchema),
  userController.createStudent,
);
router.post('/create-faculty');
router.post('/create-admin');

export const usersRoutes = router;
