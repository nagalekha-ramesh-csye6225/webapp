const logger = require('../utils/logger.js');

const validateNoPayload = (req, res, next) => {
    if(req.headers['content-type'] || Object.keys(req.body).length > 0) {
        logger.error('Request has payload');
        return res.status(400).send()
    }
    next();
}

module.exports = validateNoPayload;