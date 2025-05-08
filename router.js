const express = require('express');
const fs = require('fs')
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is up. listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send('<header><h1>Home</h1><h2></header>');
});

app.get('/packers/:id', (req, res) => {
    const id = req.params.id;
    res.send(`This is the Packer path ${id}`);
});

app.route('/student/search')
.get((req, res) => {
    const data = req.query
    const name = req.query.name

});