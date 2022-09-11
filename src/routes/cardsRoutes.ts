import { Router } from 'express';
import { schemaValidate } from '../middlewares/schemaValidateMiddleware';
import validToken from '../middlewares/validToken';
import { newCardSchema } from '../schemas/cardsSchema';
import * as cardsController from '../controllers/cardsControllers';

const cardRoutes = Router();

cardRoutes.post('/cards/create',validToken,schemaValidate(newCardSchema), cardsController.newCard);
cardRoutes.get('/cards/getCards',validToken,cardsController.findCards);
cardRoutes.delete('/cards/delete/:cardId',validToken,cardsController.deleteCard);

export default cardRoutes;