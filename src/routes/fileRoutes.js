import express from 'express';
import FileController from '../controllers/fileControllers';

const route = express();

route.get('/images/:name', FileController.downloadImages);
route.get('/uploads/:name', FileController.downloadUploads);
route.get('/image/:name', FileController.getImagesLocation);

export default route;
