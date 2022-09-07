import { Router } from 'express';
import validToken from '../middlewares/validToken';
import * as credentialController from '../controllers/credentialsControllers'

const credentialRoutes = Router();

credentialRoutes.post('/credentials/create',validToken,credentialController.newCredential);
credentialRoutes.get('/credentials/getCredebtial/:credentialId');
credentialRoutes.delete('/credential/deleteCredential/:credentialId');

export default credentialRoutes;