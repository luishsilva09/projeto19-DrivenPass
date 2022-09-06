 import { Router } from 'express';
import cardRoutes from './cardsRoutes';
import credentialRoutes from './credentialRoutes';
import secureNotesRoutes from './notesRoutes';
import usersRoutes from './usersRoutes';
import wifiRoutes from './wifiRoutes';

 const routes = Router();

 routes.use(credentialRoutes);
 routes.use(secureNotesRoutes);
 routes.use(usersRoutes);
 routes.use(cardRoutes);
 routes.use(wifiRoutes);

 export default routes;