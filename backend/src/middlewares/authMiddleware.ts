import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: string;
}

const protect = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { userId: string };
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

export default protect;
