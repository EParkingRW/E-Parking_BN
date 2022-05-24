import express from 'express';
import paymentControllers from '../controllers/paymentControlers';
import { isLoggedIn } from '../middlewares/auth';

const app = express();

app.post('/card', isLoggedIn, paymentControllers.chargeCard);
app.post('/momo',isLoggedIn, paymentControllers.rw_mobile_money);
app.get('/:userId/verify', paymentControllers.checkMomoPay);
app.post('/cash',isLoggedIn,paymentControllers.payByCash);
app.get('/all',paymentControllers.getAllTransactions);
app.get('/all/card',paymentControllers.getAlltransactionsOfCard);
app.get('/all/cash',paymentControllers.getAlltransactionsOfCash);
app.get('/all/momo',paymentControllers.getAlltransactionsOfMomo);
export default app;
