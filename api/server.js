const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ server: 'up'})
});

module.exports = app;
