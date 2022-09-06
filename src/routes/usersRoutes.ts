import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.post('/users/sigUp');
usersRoutes.post('/users/signIn');

export default usersRoutes;