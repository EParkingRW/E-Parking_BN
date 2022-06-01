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
              phone_number: '555-555-5555',
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
              phone_number: '555-555-5555',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/payment/cash': {
    post: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'paying using Cash',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              amount: '1500',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/payment/all': {
    get: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'Getting all transactions',
      parameters: [],
      consumes: ['application/json'],
      responses,
    },
  },
  '/payment/all/momo?startingDate={startingDate}&endingDate={endingDate}': {
    get: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'Getting all MOMO transactions',
      parameters: [
        {
          in: 'query',
          name: 'startingDate',
          required: true,
          schema: {
            example: "1/1/2020",
          },
        },
        {
          in: 'query',
          name: 'endingDate',
          required: true,
          schema: {
            example: '1/1/2023',
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/payment/all/card?startingDate={startingDate}&endingDate={endingDate}': {
    get: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'Getting all card transactions',
      parameters: [
        {
          in: 'query',
          name: 'startingDate',
          required: true,
          schema: {
            example: "1/1/2020",
          },
        },
        {
          in: 'query',
          name: 'endingDate',
          required: true,
          schema: {
            example: '1/1/2023',
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
  '/payment/all/cash?startingDate={startingDate}&endingDate={endingDate}': {
    get: {
      tags: ['Payment'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'Getting all cash transactions',
      parameters: [
        {
          in: 'query',
          name: 'startingDate',
          required: true,
          schema: {
            example: "1/1/2020",
          },
        },
        {
          in: 'query',
          name: 'endingDate',
          required: true,
          schema: {
            example: '1/1/2023',
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
};

export default payment;
