import express from 'express';
import multer from 'multer';
import uploadConfig from './config/uploads';

import OrphanageController from './controllers/OrphanageController';

const routes = express.Router();
const upload = multer(uploadConfig);

const orphanageController = new OrphanageController();

routes.post('/orphanages', upload.array('images'), orphanageController.create)
routes.get('/orphanages', orphanageController.index)
routes.get('/orphanages/:id', orphanageController.show)


export default routes;