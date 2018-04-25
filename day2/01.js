let http = require('http');
let querystring = require('querystring');

http.createServer((req, res) => {
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        let allData = '';
        req.addListener('data', function(chunk) {
            allData += chunk;

        })
        req.addListener('end', () => {
            let dataObj = querystring.parse(allData);
            console.log(dataObj);
        })
    }
}).listen(3000, '127.0.0.1')