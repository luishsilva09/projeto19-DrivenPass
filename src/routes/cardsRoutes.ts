import { Router } from 'express';

const cardRoutes = Router();

cardRoutes.post('/cards/create');
cardRoutes.get('/cards/getCards/:cardId');
cardRoutes.delete('/cards/delete/:cardId');

export default cardRoutes;