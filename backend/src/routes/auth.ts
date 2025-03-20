import express, { Request, Response } from 'express';
import { signup, login } from '../controllers/authController';
import protect from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, (req: Request, res: Response) => {
  res.json({ message: 'Welcome to your profile!' });
});

export default router;
