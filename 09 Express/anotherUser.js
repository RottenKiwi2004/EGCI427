const express = require('express')
const app = express()
const fs = require('fs')

let data = fs.readFileSync(`${__dirname}/user.json`, 'utf-8')
data = JSON.parse(data);

const iterable = ['name', 'password', 'occupation', 'id'];

app.post('/insertUser/:name/:password/:occupation/:id', (req, res) => {
    let newUser = {};
    for(const it of iterable) newUser[it] = req.params[it];
    data[`user${req.params.id}`] = newUser;
    res.end(JSON.stringify(data,'',4));
})

const server = app.listen(8081, ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log(`Application running on http://${host}:${port}`);
})
