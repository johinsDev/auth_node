import { Router } from 'express';

import * as authController from './user-controller';
import AuthServices from './user-service';

const routes = new Router();

routes.post('/register', authController.signUp);
routes.post('/login', AuthServices.loginMiddleware, authController.login);

export default routes;
