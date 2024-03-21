const logger = require('../utils/logger.js');

const handleMethodNotAllowed = (req, res) => {
    logger.warn('Method Not Allowed: ' + req.method + ' ' + req.originalUrl)
    return res.status(405).send();
}

module.exports = handleMethodNotAllowed;