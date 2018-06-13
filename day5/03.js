const express = require('express');
const app = express();
const db = require('./model/db.js');
const formidable = require("formidable");

app.set('view engine', 'ejs');


// 静态服务
app.use(express.static('./public'));

// 显示留言列表
app.get('/', function(req, res, next) {
    res.render('index');
})

app.get('/du', function(req, res, next) {
    db.find('test', 'fuqi', {}, (err, result) => {
        res.json({'result': result});
    })
})

// 处理留言
app.post('/tijiao', function(req, res, next) {
    const form = new formidable.IncomingForm(); 
    form.parse(req, (err, fields) => {
        // 写入数据库
        db.insert('test', 'fuqi', {
            username: fields.username,
            liuyan: fields.liuyan
        },(err, result) => {
            if(err) {
                res.send({'result': '-1'});
                return false;
            }
            res.json({'result': '1'});
        })
    })
})
app.listen(3000);