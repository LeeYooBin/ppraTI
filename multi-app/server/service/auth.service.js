import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../database/client.js";

const secretKey = process.env.SECRET_KEY;

const isValidEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const registerUser = async (name, email, password) => {
  if (!isValidEmail(email)) {
    const error = new Error("Invalid email format");
    error.statusCode = 400;
    throw error;
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    const error = new Error("Email is already in use");
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return generateToken(user);
};

export const loginUser = async (email, password) => {
  if (!isValidEmail(email)) {
    const error = new Error("Invalid email format");
    error.statusCode = 400;
    throw error;
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    const error = new Error("Invalid Password");
    error.statusCode = 401;
    throw error;
  }

  return generateToken(user);
};

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: "7d" });
};
