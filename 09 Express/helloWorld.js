const express = require('express');
const routing = express();

routing.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
})

routing.listen(8081);