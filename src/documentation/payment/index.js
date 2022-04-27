import responses from '../responses';
import 'dotenv/config';

const payment = {
  '/payment/card': {
    post: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'payment using card',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              card_number: '5531886652142950',
              cvv: '564',
              expiry_month: '09',
              expiry_year: '23',
              currency: 'RWF',
              amount: '100',
              phone_number: '0902620185',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/payment/momo': {
    post: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'paying using Mobile money',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              amount: '1500',
              phone_number: '0902620185',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
};

export default payment;
