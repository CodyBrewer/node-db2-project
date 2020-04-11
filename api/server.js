const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express();

const carsRouter = require('./cars/cars-router');

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use('/api/cars', carsRouter);

app.get('/api/status', (req, res) => {
    res.json({ server: 'up'})
});

module.exports = app;
