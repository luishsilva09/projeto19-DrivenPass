import { Router } from 'express';
import validToken from '../middlewares/validToken';

const secureNotesRoutes = Router();

secureNotesRoutes.post('/notes/create',validToken);
secureNotesRoutes.get('/notes/getNotes/:noteId');
secureNotesRoutes.delete('/notes/deleteNote/:noteId')

export default secureNotesRoutes;