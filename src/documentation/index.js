import dotenv from 'dotenv';
import swaggerDoc from './swagger.json';
import Vehicles from './vehicles';
import users from './users';
import payment from './payment';

const defaults = swaggerDoc.paths;

dotenv.config();

const host =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL.split('https://')[1]
    : process.env.API_URL.split('http://')[1];

const paths = {
  ...defaults,
  ...Vehicles,
  ...users,
  ...payment,
};

const config = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'smartParking APIs Documentation',
    description: '',
  },
  host,
  basePath: `/api/v1`,
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'smartParking APIs Documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths,
};
export default config;
