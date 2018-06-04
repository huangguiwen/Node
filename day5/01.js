const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
    let url = 'mongodb://localhost:27017/test';
    // 连接数据库
    MongoClient.connect(url, function(err, client) {
        if(err){
            console.error('数据库连接失败！');
            return;
        }
        
        console.log("数据库连接成功！");
        const db = client.db('test');
        db.collection('fuqi').insert({name:"myName",age:"myAge"},function(err,result){
            if(err){
                console.error(err);
            }else{
                console.log("insert result:");
                console.log(result);
                res.send('插入数据成功！');
                client.close();
            }
        })
    });
})

app.listen(3000);