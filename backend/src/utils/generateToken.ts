import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET || 'default_secret', {
    expiresIn: '1h',
  });
};

export default generateToken;
