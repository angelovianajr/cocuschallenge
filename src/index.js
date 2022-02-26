const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const sequelize = require('./config/sequelize')
const app = require('./config/express');

// Connect to sequelize database RDS
sequelize
.sync()
.then(() => {
    // listen to requests
    app.listen(port, () => logger.info(`server started on port ${port} (${env})`));
  })
  .catch(err => {
    console.log(err);
  });

/**
* Exports express
* @public
*/
module.exports = app;
