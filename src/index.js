const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic Service - Hello World!');
});

app.get('/add/:a/:b', (req, res) => {
    res.json(Number(req.params.a) + Number(req.params.b));
});

app.listen(port);