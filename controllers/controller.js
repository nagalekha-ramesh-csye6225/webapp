const {sequelize} = require('../config/database');

exports.healthCheck = async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log("Database connection successful");
        res.status(200).send();

    } catch (error) {
        console.error('Database connection error:', error);
        res.status(503).send();
    }
}