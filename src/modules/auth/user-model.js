import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
});

export default mongoose.model('users', UserSchema);
