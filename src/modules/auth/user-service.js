import UserModel from './user-model';
<<<<<<< HEAD
=======
import { authLocal } from './passport';
>>>>>>> feature/auth

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
<<<<<<< HEAD
=======
  
  loginMiddleware(req, res, next) {
    return authLocal(req, res, next);
  }
>>>>>>> feature/auth
}

export default new AuthService();
