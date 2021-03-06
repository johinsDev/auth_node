import mongoose, { Schema } from 'mongoose';
<<<<<<< HEAD

const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
});

=======
import uniqueValidator from 'mongoose-unique-validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    validate: {
      validator(email) {
        const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator(password) {
        return password.length >= 6 && password.match(/\d+/g);
      },
      message: 'Not a valid password!',
    },
  },
  username: String,
});

UserSchema.plugin(uniqueValidator, {
  message: 'the {PATH} {VALUE} already exists',
});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }
  
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
};

>>>>>>> feature/auth
export default mongoose.model('users', UserSchema);
