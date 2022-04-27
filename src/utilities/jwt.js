import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const signinToken = (params) => {
  const token = jwt.sign(params, process.env.DEFAULT_JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN || '24h',
  });
  return token;
};
// decoding token
export const decode = (token) => {
  const payload = jwt.verify(token, process.env.DEFAULT_JWT_SECRET);
  return payload;
};