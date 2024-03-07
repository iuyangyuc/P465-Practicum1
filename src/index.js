require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { add } = require('./arithmetica');
const app = express();
app.use(cors());


const port = process.env.PORT;
if(!process.env.PORT) {
    throw new Error('PORT environment variable is required');
}

app.get('/', (req, res) => {
    res.send('Arithmetic Service - Hello World!!!');
});

app.get('/add/:a/:b', (req, res) => {
    res.json(Number(req.params.a) + Number(req.params.b));
});

app.get('/subtract/:a/:b', (req, res) => {
    res.json(Number(req.params.a) - Number(req.params.b));
});

app.get('/multiply/:a/:b', (req, res) => {
    res.json(Number(req.params.a) * Number(req.params.b));
});

app.get('/divide/:a/:b', (req, res) => {
    res.json(Number(req.params.a) / Number(req.params.b));
});

app.listen(port);