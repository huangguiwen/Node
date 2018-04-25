let http = require('http');
let fs = require('fs');


let server = http.createServer((req,res) => {
    if(req.url == '/fang') {
        fs.readFile('./fang.html',(err,data) => {
            res.writeHead(200, { 'Content-type':'text/html;charset=UTF-8' });
            res.end(data);
        })
    } else if(req.url == '/yuan') {
        fs.readFile('./yuan.html',(err,data) => {
            res.writeHead(200, { 'Content-type':'text/html;charset=UTF-8' });
            res.end(data);
        })
    }
    
})

server.listen(3000, '127.0.0.1');