import { Router } from 'express';

import authRoutes from './auth';
import AuthServices from './auth/user-service';

const routes = new Router();

routes.use('/auth', authRoutes);
routes.get('/helloworld', AuthServices.jwtMiddleware, (req, res) => {
  return res.status(200).json(req.user);
});

export default routes;
