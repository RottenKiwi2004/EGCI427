const fs = require('fs');
const crypto = require('crypto');
const http = require('http');
const keyOrder = ['id', 'username', 'password', 'fullname'];

const obj = JSON.parse(fs.readFileSync('user.json', 'utf8'))
const users = {};

// hash and add to users
for (const usr of obj) {
    const hash = crypto.createHash('sha1').update(usr.password).digest('hex');
    usr.password = hash;
    users[usr.id] = usr;
}

console.log(users);



http.createServer(function (req, res) {

    if (!req.url.startsWith('/profile')) {
        res.write("Not found");
        res.end();
        return;
    }

    let profile = req.url.split('/')[2];
    if (users[profile] === undefined) {
        console.log(`Not found: ${req.url}`);
        res.write("Not found");
        res.end();
        return;
    }

    for (const key of keyOrder) {
        res.write(`${key}: ${users[profile][key]}\n`);
    }
    res.end();
}).listen(8081);