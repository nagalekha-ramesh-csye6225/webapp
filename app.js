require('dotenv').config();

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());

app.use('/', apiRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
