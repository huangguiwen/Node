let http = require('http');
let url = require('url');

http.createServer((req,res) => {
    let oQuery = url.parse(req.url, true).query;
    let sName = oQuery.name;
    let sAge = oQuery.age;
    let sSex = oQuery.sex;
    res.end('heheh!');
}).listen(3000, '127.0.0.1')