import { Router } from 'express';
import { usersRoutes } from '../modules/users/users.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: usersRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
