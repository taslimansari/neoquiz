import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import generateToken from '../utils/generateToken';

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();

    const token = generateToken(user._id.toString());
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id.toString());
    res.json({ token });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};
