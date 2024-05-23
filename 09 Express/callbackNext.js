const express = require('express');
const routing = express();

const cb0 = (req, res, next) => {
    console.log("CB0");
    next()
}
const cb1 = (req, res, next) => {
    console.log("CB1");
    next()
}
const cb2 = (req, res) => {
    console.log("CB2");
    res.send("Hello from C");
}

routing.get('/example/c', [cb0, cb1, cb2]);

routing.listen(8081);

