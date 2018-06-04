const express = require('express');
const app = express();
const db = require('./model/db.js');

app.set('view engine', 'ejs');


//静态服务
app.use(express.static('./public'));

//显示留言列表
app.get('/', function(req, res, next) {
    res.render('index');
})


app.listen(3000);