import UserModel from './user-model';

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
}

export default new AuthService();
