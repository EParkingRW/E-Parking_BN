import express from 'express';
import paymentControllers from '../controllers/paymentControlers';
import { isLoggedIn } from '../middlewares/auth';

const app = express();

app.post('/card', isLoggedIn, paymentControllers.chargeCard);
app.post('/momo', paymentControllers.rw_mobile_money);
app.get('/:userId/verify', isLoggedIn,paymentControllers.checkMomoPay);

export default app;
