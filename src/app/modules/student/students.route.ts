import express from 'express';
import studentController from './students.controller';

const router = express.Router();

router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getSingleStudent);
router.delete('/delete-student/:id', studentController.deleteSingleStudent);

export const studentRoutes = router;
