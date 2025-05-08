const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is up. listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send('<h1>Home There</h1>');
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    res.send(`This is the Packer path ${id}`);
});