const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/add/:a/:b', (req, res) => {
    res.json(Number(req.params.a) + Number(req.params.b));
});

app.listen(port);