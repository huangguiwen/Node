let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');
http.createServer((req, res) => {
    
    // 获取路径
    let pathName = url.parse(req.url).pathname;
    // 默认首页
    if(pathName == '/') {
        pathName == 'index.html';
    }
    // 获取拓展名
    let extname = path.extname(pathName);
    console.log(extname);
    let a = getMime(extname);
    fs.readFile(`../test/${pathName}`, (err, data) => {
        if(err){ 
            // 文件不存在
            fs.readFile('./404.html', (err, data) => {
                res.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
                res.end(data);
            })
            return false;
        }
        res.writeHead(200, {'Content-Type': a});
        res.end(data);
    })
}).listen(3000, '127.0.0.1');

function getMime(extname){
    switch(extname) {
        case '.html': 
            return 'text/html';
            break;
        case '.jpg':
            return 'image/jpg';
            break;
        case '.js':
            return 'text/js';
            break;
    }
}