import { Router } from 'express';

const secureNotesRoutes = Router();

secureNotesRoutes.post('/notes/create');
secureNotesRoutes.get('/notes/getNotes/:noteId');
secureNotesRoutes.delete('/notes/deleteNote/:noteId')

export default secureNotesRoutes;