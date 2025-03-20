import express, { Request, Response, NextFunction } from 'express';
import { signup, login } from '../controllers/authController';
import protect from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect as (req: Request, res: Response, next: NextFunction) => void, 
  (req: Request, res: Response) => {
    res.json({ message: 'Welcome to your profile!' });
});

// New route to get user details by email
router.get('/users/:email', protect, (req: Request, res: Response) => {
  const { email } = req.params;
  // Add logic to fetch user data from the database
  res.json({ message: `Fetching details for user: ${email}` });
});

export default router;
