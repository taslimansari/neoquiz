import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth';

const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

app.use('/api', (req, res, next) => {
  console.log(`API call: ${req.method} ${req.url}`);
  next();
}, router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
