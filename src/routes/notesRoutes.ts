import { Router } from 'express';
import validToken from '../middlewares/validToken';
import * as noteController from '../controllers/notesControllers'
import { schemaValidate } from '../middlewares/schemaValidateMiddleware';
import { newNoteSchema } from '../schemas/noteSchema';

const secureNotesRoutes = Router();

secureNotesRoutes.post('/notes/create',validToken,schemaValidate(newNoteSchema),noteController.newNote);
secureNotesRoutes.get('/notes/getNotes',validToken,noteController.findNotes);
secureNotesRoutes.delete('/notes/deleteNote/:noteId',validToken,noteController.deleteNote)

export default secureNotesRoutes;