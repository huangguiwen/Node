let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    if(res.url == '/favicon.ico'){
        return;
    }
    // 读取文件夹下的的所有文件
    fs.readdir('../test', (err, files) => {
        let dirArr = [];
       
        (function iterator(i) {
            if(i == files.length) {
                console.log(dirArr);
                return;
            }
            fs.stat(`../test/${files[i]}`, (err, stats) => {
                if(stats.isDirectory()) {
                    dirArr.push(files[i]);
                }
                iterator(i+1);
            })
        })(0)

        // 遍历读取的所有文件的数组
        // files.forEach((value, index) => {
        //     let stat = fs.statSync(`../test/${value}`);
        //     if(stat.isDirectory()){
        //         dirArr.push(value);
        //     }
        // })
    })
    res.end();

    
}).listen(3000, '127.0.0.1')