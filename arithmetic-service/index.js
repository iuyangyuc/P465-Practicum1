const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    res.send('arithmetic-service-Hello World!');
});

app.listen(port);

function add(a, b) {
    return a + b;
}

app.get('/addNumbers', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = add(a, b);
    res.send(`The sum is ${result}`);
});