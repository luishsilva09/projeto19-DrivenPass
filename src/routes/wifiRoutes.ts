import { Router } from 'express';

const wifiRoutes = Router();

wifiRoutes.post('/wifi/create');
wifiRoutes.get('/wifi/getWifi/:wifiId');
wifiRoutes.delete('/wifi/delete/:wifiId');

export default wifiRoutes;