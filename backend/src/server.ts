import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(`MongoDB connection error: ${err.message}`));

app.use('/api', router);

app.get('/', (req: Request<{}, {}, any>, res: Response<any>) => {
  res.send('Server is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
