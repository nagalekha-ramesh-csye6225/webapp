require('dotenv').config();

const express = require('express');
const sequelize = require('./src/config/database');
const healthRoutes = require('./src/routes/healthRoutes');
const userRoutes = require('./src/routes/userRoutes')

const User = require('./src/models/user');

const app = express();

app.use(express.json());

app.use('/healthz', healthRoutes);
app.use('/v1/user', userRoutes)

const port = process.env.PORT || 8080;

// If db connection is not there, what happens to this?
sequelize.sync({force: JSON.parse(process.env.DROP_DATABASE) || false})
    .then(() => {
        console.log('Database synchronized successfully!');
    })
    .catch(error => {
        console.error('Error synchronizing database:', error);
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = app;