import { Router } from 'express';

const credentialRoutes = Router();

credentialRoutes.post('/credentials/create');
credentialRoutes.get('/credentials/getCredebtial/:credentialId');
credentialRoutes.delete('/credential/deleteCredential/:credentialId');

export default credentialRoutes;