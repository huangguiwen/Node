let http = require('http');
let url = require('url');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html;charset=UTF-8'});
    let url = req.url;
    if(url.substr(0, 9) == '/student/') {
        let sId = url.substr(9);
        if(/^\d{10}$/.test(sId)) {
            res.end(`学生ID为${sId}!`);
        } else {
            res.end('学生号不对！');
        }
    } else if(url.substr(0, 9) == '/teacher/') {
        let tId = url.substr(9);
        if(/^\d{5}$/.test(tId)) {
            res.end(`老师ID为${tId}!`);
        } else {
            res.end('老师号不对！');
        }
    } else {
        res.end('url错误！');
    }
}).listen(3000, '127.0.0.1')