import { Router } from 'express';
import * as usersControllers from '../controllers/usersControllers'
import { schemaValidate } from '../middlewares/schemaValidateMiddleware';
import { newUserSchema } from '../schemas/usersSchemas';

const usersRoutes = Router();

usersRoutes.post('/users/signUp', schemaValidate(newUserSchema),usersControllers.signup);
usersRoutes.post('/users/signIn',usersControllers.signin);

export default usersRoutes;