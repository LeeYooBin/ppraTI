import { registerUser, loginUser } from "../service/auth.service.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const token = await registerUser(name, email, password);
    res.status(201).json({ token });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
