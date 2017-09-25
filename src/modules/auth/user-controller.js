import AuthService from './user-service';

<<<<<<< HEAD
export const signUp = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: String(error) });
  }
};
=======
const parse = (error) => {
  const myErrors = error;
  Object.keys(error.errors).map((e) => (myErrors.errors[e] = { message: error.errors[e].message }));
  return error;
};

export const signUp = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(parse(error));
  }
};

export const login = (req, res, next) => {
  res.status(200).json(req.user);

  return next();
};
>>>>>>> feature/auth
