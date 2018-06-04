const express = require('express');
const app = express();
const db = require('./model/db.js');

app.get('/insert', (req, res) => {
    db.insert('test', 'fuqi', {'name': 'ha', 'age': '23'}, (err, result) => {
        if(err) {
            console.log('插入数据失败！');
            return ;
        }
        res.send('插入成功');
    })
})

app.get('/find', (req, res) => {
    db.find('test', 'fuqi', {}, {'pageAmount': 3, 'page': 2}, (err, result) => {
        if(err) {
            console.log('查询数据失败！');
            return ;
        }
        console.log(result);
        res.send('查询数据成功！');
    })
})

app.get('/delete', (req, res) => {
    db.delete('test', 'fuqi', {'age': '23'}, (err, result) => {
        if(err) {
            console.log('删除数据失败！');
            return ;
        }
        console.log(result);
        res.send(result);
    })
})

app.get('/update', (req, res) => {
    db.update('test', 'fuqi', {'name': 'myName'}, {$set:{'name': 'CJM'}}, (err, result) => {
        if(err) {
            console.log('删除数据失败！');
            return ;
        }
        res.send(result);
    })
})

app.listen(3000);