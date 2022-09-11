import { Router } from 'express';
import { schemaValidate } from '../middlewares/schemaValidateMiddleware';
import validToken from '../middlewares/validToken';
import { newWifi } from '../schemas/wifiSchema';
import * as wifiController from '../controllers/wifiControllers';

const wifiRoutes = Router();

wifiRoutes.post('/wifi/create',validToken,schemaValidate(newWifi),wifiController.newWifi);
wifiRoutes.get('/wifi/getWifi',validToken,wifiController.findWifi);
wifiRoutes.delete('/wifi/delete/:wifiId',validToken,wifiController.deleteWifi);

export default wifiRoutes;