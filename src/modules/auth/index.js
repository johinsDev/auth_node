import { Router } from 'express';

import * as authController from './user-controller';

const routes = new Router();

routes.post('/register', authController.signUp);

export default routes;
