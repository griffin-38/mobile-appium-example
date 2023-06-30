require('dotenv').config();

const config = {
  testEnv: (process.env.ENV || 'staging').toString().toLowerCase(),
  xApiKey: process.env.XAPIKEY || 'web',
};

module.exports = config;