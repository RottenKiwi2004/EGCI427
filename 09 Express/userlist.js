const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

app.get('/getUser/:id', (req,res) => {
    let id = req.params.id;
    fs.readFile(`${__dirname}/data.json`, 'utf-8', (err,data) => {
        data = JSON.parse(data);
        let selectedUser = data[`user${id}`];
        res.end(JSON.stringify(selectedUser,'',4))
    })
})

app.delete('/delUser/:id', (req,res) => {
    let id = req.params.id;
    fs.readFile(`${__dirname}/data.json`, 'utf-8', (err,data) => {
        data = JSON.parse(data);
        delete data[`user${id}`];
        res.end(JSON.stringify(data,'',4))
    })
})

app.post('/addUser', (req, res) => {
    fs.readFile(`${__dirname}/data.json`, 'utf-8', (err,data) => {
        data = JSON.parse(data);
        for(let u in user)
            data[u] = user[u];
        res.end(JSON.stringify(data,'',4));
        console.log(data);
    })
})

app.post('/updateUser/:id', (req, res) => {
    let id = req.params.id;
    fs.readFile(`${__dirname}/data.json`, 'utf-8', (err,data) => {
        data = JSON.parse(data);
        console.log(req.body)
        let updateData = JSON.parse(req.body);
        data[`user${id}`] = updateData;
        res.end(JSON.stringify(data,'',4))
    })
})

var user = {
    "user4": {
        "name": "betty",
        "password": "4444",
        "occupation": "engineer",
        "id": 4
    }
}

const server = app.listen(8081, ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log(`Application running on http://${host}:${port}`);
})
