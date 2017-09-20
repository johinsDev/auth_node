import UserModel from './user-model';
import { authLocal } from './passport';

class AuthService {
  register({ email, password, username }) {
    if (!email) {
      throw new Error('Email required');
    } else if (!password) {
      throw new Error('Password required');
    } else if (!username) {
      throw new Error('Username required');
    }

    try {
      return UserModel.create({ email, password, username });
    } catch (error) {
      throw error;
    }
  }
  
  loginMiddleware(req, res, next) {
    return authLocal(req, res, next);
  }
}

export default new AuthService();
