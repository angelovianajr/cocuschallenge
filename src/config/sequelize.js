const Sequelize = require('sequelize');
const logger = require('./logger');
const { db } = require('./vars');

// Export sequelize configs
const sequelize = new Sequelize(db.dbname, db.username, db.password, {
  dialect: 'mysql',
  host: db.uri,
  port: db.port
});

module.exports = sequelize;