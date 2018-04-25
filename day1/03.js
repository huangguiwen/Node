let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    fs.readFile('./01.html', (err, data)=> {
        res.end(data);
    })
    
}).listen(3000, '127.0.0.1')