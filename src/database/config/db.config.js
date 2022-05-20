const dotenv = require('dotenv');

dotenv.config();
const config = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false,
  },
  production: {
    username: "vmtathylqvhozs",
    password:  "2a0e9be8242f9bdfdb9ac5b571dd10b6a51dee92af54961957fffe02f6686b9f",
    database:  "d79q7vo4258mtb",
    host: "ec2-3-222-204-187.compute-1.amazonaws.com",
    port: 5432,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false,
    dialectOptions:{
      bigNumberStrings: true,
      ssl:{
        required:true,
        rejectUnauthorized: false
      }
    }
  },
};

module.exports = config;
