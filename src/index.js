import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import app from './routes/index'
import { isAuth } from './middlewares/auth';

const fileUpload = require("express-fileupload");

dotenv.config();
const __dirname = path.resolve();
const server = express();
server.use(fileUpload(
  {
      useTempFiles: true
  }
));
server.use(express.static(path.join(__dirname, 'assets')));
server.use(express.static('files'));
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
//server.use(express.urlencoded({ extended: false }));
server.use(isAuth);
server.use(app)
server.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

const PORT = process.env.PORT || 3030;

server.listen(PORT, () =>
  process.stdout.write(
    `Server is running at http://localhost:${PORT}\n`,
  ),
);
