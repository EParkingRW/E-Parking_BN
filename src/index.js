import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index'
import { isAuth } from './middlewares/auth';
import * as http from 'http'

const fileUpload = require("express-fileupload");
const {Server} = require('socket.io')
dotenv.config();
const __dirname = path.resolve();
const app = express();
const server = http.createServer(app)
const io = new Server(server, {cors:{origin: "*"}})
app.use(fileUpload(
  {
      useTempFiles: true
  }
));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static('files'));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
//app.use(express.urlencoded({ extended: false }));
app.use(isAuth);
app.use(router)
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});
io.on('connection', socket =>{
  //console.log("connected to",socket.id)
  socket.on('disconnected',()=>{
  console.log("user disconnected:",socket.id)
  })
})
const PORT = process.env.PORT || 3030;

server.listen(PORT, () =>
  process.stdout.write(
    `server is running at http://localhost:${PORT}\n`,
  ),
);
export default io;