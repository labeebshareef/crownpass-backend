'use strict';

const bodyParser = require('body-parser');
const csurf = require('csurf');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const logger = require('@accubits/logger');
const morgan = require('morgan');

const loggerUtil = require('../utilities/logger');
// const rateLimiterUtil = require('../utilities/rateLimiter');

const routes = require('../routes');

module.exports = async (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.use(cookieParser());
  app.use(cors());
  app.use(fileUpload({ parseNested: true }));
  app.use(helmet());
  logger.init({});
  app.use(morgan('combined', { stream: loggerUtil.stream }));
  // app.use(rateLimiterUtil);

  app.use(routes);
  app.use(csurf({ cookie: true }));

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    res.status(404);
    next({
      status: 404,
      message: 'Method or URL not found',
    });
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // add this line to include winston logging
    loggerUtil.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - 
    ${req.method} - ${req.ip}`);

    // render the error page
    res.status(err.status || 500);
    res.send({
      error: err.message || 'Method or URL not found',
    });
  });
};
