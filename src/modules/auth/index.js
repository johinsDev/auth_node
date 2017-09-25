import { Router } from 'express';

import * as authController from './user-controller';
<<<<<<< HEAD
=======
import AuthServices from './user-service';
>>>>>>> feature/auth

const routes = new Router();

routes.post('/register', authController.signUp);
<<<<<<< HEAD
=======
routes.post('/login', AuthServices.loginMiddleware, authController.login);
>>>>>>> feature/auth

export default routes;
