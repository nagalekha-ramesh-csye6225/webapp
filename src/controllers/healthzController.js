const sequelize = require('../config/database');
const logger = require('../utils/logger.js');

exports.healthCheck = async (req, res) => {
    try {
        await sequelize.authenticate();
        logger.info('Database connection successful');
        res.status(200).send();

    } catch (error) {
        logger.error('Database connection error:', error);
        res.status(503).send();
    }
}