import responses from '../responses';
import 'dotenv/config';

const users = {
  '/auth/signup': {
    post: {
      tags: ['Users'],
      security: [],
      summary: 'Signup to smart-Parking',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              email: 'admin@future.rw',
              name: ' Thunder Eye',
              phone: '0789234113',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },

  '/auth/login': {
    post: {
      tags: ['Users'],
      security: [],
      summary: 'Signin to smart-Parking',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              login: 'admin@future.rw',
              password: 'admin123',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },

  '/auth/forgot-password': {
    put: {
      tags: ['Users'],
      security: [],
      summary: 'Forget password',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              email: 'admin@future.rw',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },

  '/auth/logout': {
    post: {
      tags: ['Users'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'Logout',
      parameters: [],
      consumes: ['application/json'],
      responses,
    },
  },


  '/auth/profile/': {
    get: {
      tags: ['Users'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: 'Get my profile',
      parameters: [],
      consumes: ['application/json'],
      responses,
    },
  },

  '/auth/resetingpassword': {
    put: {
      tags: ['Users'],
      security: [],
      summary: 'Reset password',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          schema: {
            example: {
              password: 'admin1234',
            },
          },
        },
      ],
      consumes: ['application/json'],
      responses,
    },
  },
};

export default users;
