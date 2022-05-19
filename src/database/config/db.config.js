// import { config as _config } from 'dotenv';

// _config();
// const config = {
//   development: {
//     // username: "root",
//     // password: "",
//     // database: "smartParking",
//     // host: "127.0.0.1",
//     // logging: false,
//     // dialect: "mysql",
//     // seederStorage: 'sequelize',
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     logging: false,
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//   },
//   test: {
//     username: process.env.DB_USER_TEST,
//     password: process.env.DB_PASSWORD_TEST,
//     database: process.env.DB_NAME_TEST,
//     host: process.env.DB_HOST_TEST,
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//     logging: false,
//   },
//   production: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//     logging: false,
//   },
// };

// export default config;

const dotenv = require('dotenv');

dotenv.config();
const config = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
};

module.exports = config;
