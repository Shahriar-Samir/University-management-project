import { Router } from 'express';
import { usersRoutes } from '../modules/user/users.router';
import academicSemesterRoute from '../modules/academicSemester/academicSemester.route';
import { studentRoutes } from '../modules/student/students.route';
import academicFacultyRoutes from '../modules/academicFaculty/academicFaculty.rotue';
import academicDepartmentRoutes from '../modules/academicDepartment/academicDepartment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: usersRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoute,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
