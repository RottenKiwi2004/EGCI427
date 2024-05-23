const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const keyOrder = ['id', 'username', 'password', 'fullname'];

const obj = JSON.parse(fs.readFileSync('user.json', 'utf8'))
const users = {};

// hash and add to users
for (const usr of obj.users) {
    const hash = crypto.createHash('sha1').update(usr.password).digest('hex');
    usr.password = hash;
    users[usr.id] = usr;
}

// console.log(users);

const routing = express();

routing.get('/profile/:id', (req, res) => {
    let str = "";
    let usr = users[req.params.id];
    if (usr == undefined)
    {
        res.send("Not found");
        return;
    }
    for (const key of keyOrder)
        str += `${key}: ${usr[key]} <br>`;
    res.send(str);
})

routing.listen(8081);
