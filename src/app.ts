import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { usersRoutes } from './app/modules/users/users.router';
import globalErrorHandler from './app/middlewares/errorHandler';
import pageNotFoundHandler from './app/middlewares/pageNotFoundHandler';
import router from './app/routes/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1/', router);
app.use(globalErrorHandler);
app.use(pageNotFoundHandler);

export default app;
