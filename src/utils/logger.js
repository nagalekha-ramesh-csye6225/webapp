const winston = require('winston');

// const customFormat = winston.format((info) => {
//   info.time = new Date().toISOString();
//   return info;
// });

const logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
      new winston.transports.File({ filename: '/var/log/webapp/webapp.log' }),
      new winston.transports.Console(),
    ],
  });

module.exports = logger;