import User from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { use } from "react";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

// POST:/api/users/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPasswoed = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPasswoed,
    });

    const token = generateToken(newUser._id);
    newUser.password = undefined;
    return res
      .status(201)
      .json({ meassage: "User created successfully", token, user: newUser });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};

// POST:/api/users/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    //cheack if password is correct
    if (!user.comparePassword(password)) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    //return success message

    const token = generateToken(user._id);
    user.password = undefined;
    return res
      .status(200)
      .json({ meassage: "Login successful", token, user: user });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};

// controller for getting user by _id
// GET: /api/users/data

export const getUserById = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);
    if (!use) {
      return res.status(404).json({ message: "User not found" });
    }

    //return user
    user.password = undefined;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};
