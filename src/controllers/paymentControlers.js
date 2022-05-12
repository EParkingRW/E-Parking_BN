import dotenv from 'dotenv';
import open from 'open';
import { Payment } from '../database/models';
import Response from '../helpers/Response';
// import Flutterwave from 'flutterwave-node-v3';
const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY,
);

dotenv.config();
export default class paymentControllers {
  static async rw_mobile_money(req, res) {
    try {
      const payload = {
        tx_ref: `MC-158523s09v5050e8-${new Date()}`, // This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
        order_id: `USS_RWD_893982923s2323-${new Date()}`, // Unique ref for the mobilemoney transaction to be provided by the merchant
        amount: req.body.amount,
        currency: 'RWF',
        email: 'manzi@eparking.rw',
        phone_number: req.body.phone_number,
        fullname: `Manzi Erickson`,
        redirect_url: `${process.env.API_URL}/api/v1/payment/${req.me.id}/verify`,
      };
      await flw.MobileMoney.rwanda(payload)
        // eslint-disable-next-line consistent-return
        .then(async (response) => {
          // console.log('Response:', response);
          if (response.status === ' error') {
            return Response.error(res, 407, {
              message: 'Payment failed',
              error: response.message,
            });
          }
          await open(response.meta.authorization.redirect);
          res.send({ ...response });
        })
        .catch((err) =>
          Response.error(res, 400, {
            message: 'failed to send MOMO OTP',
            error: err.message,
          }),
        );
    } catch (error) {
      Response.error(res, 500, {
        message: 'server Error',
        error: error.message,
      });
    }
  }

  // eslint-disable-next-line consistent-return
  static async checkMomoPay(req, res) {
    try {
      const response = req.query.resp;
      const { userId } = req.params;
      const info = decodeURIComponent(response);
      const datas = JSON.parse(info);
      if (datas.status === 'error') {
        return res.status(403).json({
          ...datas,
        });
      }
      // console.log('data:', datas);
      const payload = {
        fullName: datas.data['customer.fullName'],
        email: datas.data['customer.email'],
        phone: datas.data['customer.phone'],
        customerId: datas.data['customer.id'],
        accountId: datas.data['customer.AccountId'],
        paymentType: datas.data.paymentType,
        currency: datas.data.currency,
        amount: datas.data.amount,
        appfee: datas.data.appfee,
        orderRef: datas.data.orderRef,
        flwRef: datas.data.flwRef,
        userId,
      };
      await Payment.create({ ...payload })
        .then(() =>
          //  res.status(201).json({ ...resp }),
          res.redirect(`${process.env.WEB_APP_URL}`),
        )
        .catch((error) =>
          res.status(500).json({
            message: 'sever error',
            error: error.message,
          }),
        );
    } catch (error) {
      res.status(500).json({
        message: 'Transaction failed to be successful',
        error: error.message,
      });
    }
  }

  // eslint-disable-next-line consistent-return
  static async chargeCard(req, res) {
    const payload = {
      card_number: req.body.card_number,
      cvv: req.body.cvv,
      expiry_month: req.body.expiry_month,
      expiry_year: req.body.expiry_year,
      currency: req.body.currency,
      amount: req.body.amount,
      redirect_url: `${process.env.API_URL}/api/v1/payment/${req.me.id}/verify`,
      fullname: `${req.me.firstName} ${req.me.lastName}`,
      email: `${req.me.email}`,
      phone_number: req.body.phone_number,
      enckey: `${process.env.FLW_ENCRYPTION_KEY}`,
      tx_ref: `MC-32444ee--${new Date()}-uee3rerds4423e43e`, // This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
    };
    try {
      const response = await flw.Charge.card(payload);
      if (response.status === 'error') {
        res.status(401).send(response);
      }
      // console.log('response', response);
      if (response.meta.authorization.mode === 'pin') {
        const payload2 = payload;
        payload2.authorization = {
          mode: 'pin',
          fields: ['pin'],
          pin: 3310,
        };
        const reCallCharge = await flw.Charge.card(payload2);
        // console.log(reCallCharge);
        if (reCallCharge.status === 'error') {
          return res.status(403).send({
            message: 'there is no charge made',
            error: reCallCharge.message,
          });
        }
        const callValidate = await flw.Charge.validate({
          otp: '12345',
          flw_ref: reCallCharge.data.flw_ref,
        });
        res.status(200).json({ ...callValidate });
        // console.log('check:', callValidate);
      }
      if (response.meta.authorization.mode === 'redirect') {
        const url = response.meta.authorization.redirect;
        open(url);
      }

      // console.log(response);
    } catch (error) {
      res.status(500).json({
        message: 'server error',
        error: error.message,
      });
      // console.log('error:', error.message);
    }
  }
}
