var express = require('express')
const fs = require('fs');
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})

app.post('/showData',function(req,res){
    
    const users = require('./output.json');

    // if (!users) users = [];

    console.log(users);

    num1 = parseInt(req.body.input1);
    num2 = parseInt(req.body.input2);
    data= {
        fname: req.body.fname,
        lname: req.body.lname,
        result: num1+num2
    }
    users.push(data);
    console.log(users);

    fs.writeFileSync("./output.json", JSON.stringify(users), 'utf-8');

    res.end(JSON.stringify(users));
})

app.listen(8081)