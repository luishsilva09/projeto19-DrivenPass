import { Router } from 'express';
import validToken from '../middlewares/validToken';
import * as credentialController from '../controllers/credentialsControllers'
import { schemaValidate } from '../middlewares/schemaValidateMiddleware';
import { newCredential } from '../schemas/credentialsSchemas';

const credentialRoutes = Router();

credentialRoutes.post('/credentials/create',validToken,schemaValidate(newCredential),credentialController.newCredential);
credentialRoutes.get('/credentials/getCredetial',validToken,credentialController.findCredentials);
credentialRoutes.delete('/credential/deleteCredential/:credentialId',validToken,credentialController.deleteCredential);

export default credentialRoutes; 