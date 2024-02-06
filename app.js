require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const healthRoutes = require('./routes/healthRoutes');
const userRoutes = require('./routes/userRoutes')

const User = require('./models/user');

const app = express();

app.use(express.json());

app.use('/healthz', healthRoutes);
app.use('/v1/user', userRoutes)

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
