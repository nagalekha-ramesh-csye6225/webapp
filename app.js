require('dotenv').config();

const logger = require("./src/utils/logger.js");

const express = require('express');
const sequelize = require('./src/config/database');
const healthRoutes = require('./src/routes/healthRoutes');
const userRoutes = require('./src/routes/userRoutes')

const User = require('./src/models/user');

const app = express();

app.use(express.json());

app.use('/healthz', healthRoutes);
app.use('/v2/user', userRoutes)

const port = process.env.PORT || 8080;

// If db connection is not there, what happens to this?
sequelize.sync({force: JSON.parse(process.env.DROP_DATABASE) || false})
    .then(() => {
        logger.info('Database synchronized successfully!');
    })
    .catch(error => {
        logger.error('Error synchronizing database:' + error);
    });


app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});

module.exports = app;