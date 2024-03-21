const logger = require('../utils/logger.js');

const validateNoQueryParams = (req, res, next) => {
    if(Object.keys(req.query).length > 0 || req.url.includes('?')){
        logger.error('Request has query parameters');
        return res.status(400).send()
    }
    next();
}

module.exports = validateNoQueryParams;