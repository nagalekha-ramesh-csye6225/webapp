require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const healthRoutes = require('./routes/healthRoutes');

const User = require('./models/user');

const app = express();

app.use(express.json());

app.use('/healthz', healthRoutes);

const port = process.env.PORT || 8080;

sequelize.sync({force: true})
    .then(() => {
        console.log('Database synchronized successfully!');
    })
    .catch(error => {
        console.error('Error synchronizing database:', error);
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
