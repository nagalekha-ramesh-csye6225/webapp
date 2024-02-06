require('dotenv').config();

const express = require('express');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(express.json());

app.use('/healthz', healthRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
