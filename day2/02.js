let http = require('http');
let path = require('path');
let formidable = require('formidable');
let util = require('util');
let fs = require('fs');
let timeformat = require('silly-datetime');


http.createServer((req, res) => {
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        
        form.uploadDir = "./";

        form.parse(req, function(err, fields, files) {
            // console.log(files);
            let nowtime = timeformat.format(new Date(), 'YYYYMMDDHHmm');
            let random = parseInt(Math.random() * 89999 + 10000);
            let extname = path.extname(files.file.name);
            let oldpath = __dirname + '/' + files.file.path;
            let newpath = __dirname + '/' + nowtime + random + extname;

            fs.rename(oldpath, newpath, (err) => {
                if(err) {
                    throw Error('faild！');
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('success');
            })
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end(util.inspect({fields: fields, files: files}));
        });
    
        return;
    }
}).listen(3000, '127.0.0.1')