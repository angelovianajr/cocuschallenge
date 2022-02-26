const path = require('path');

// import .env variables
require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  example: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    uri: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dbname: process.env.RDS_DB_NAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
