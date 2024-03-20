const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
      new winston.transports.File({ 
        filename: '/var/log/webapp/webapp.log',
        level: 'silly'
      }),
      new winston.transports.Console(),
    ],
  });

module.exports = logger;