import AuthService from './user-service';

export const signUp = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: String(error) });
  }
};
