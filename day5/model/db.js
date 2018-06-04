// 这个模块里面封装了所有对数据库的常用操作
const MongoClient = require('mongodb').MongoClient;
const settings = require('../settings.js');

// 连接数据库
function _connectDB(callback) {
    let url = settings.dburl;
    MongoClient.connect(url, (err, client) => {
        if(err) {
            callback(err, null);
            client.close();
            return ;
        }
        callback(err, client);
        client.close();
        console.log("数据库连接成功！");
    })
}

// 插入数据
exports.insert = function(dbName, collectionName, json, callback){
    _connectDB((err, client) => {
        const db = client.db(dbName);
        db.collection(collectionName).insert(json, (err, result) => {
            callback(err, result);
            client.close();
        })
    })
}

// 查找数据
exports.find = function(dbName, collectionName, json, args1, args2) {
    let callback, skipNumber, limitNumber
    if(arguments.length == 4) {
        callback = args1;
        skipNumber = 0;
        limitNumber = 0;
    } else if(arguments.length == 5) {
        callback = args2;
        skipNumber = args1.pageAmount * args1.page;
        limitNumber = args1.pageAmount;
    } else {
        throw new Error('参数个必须是4个或5个！');
    }
    _connectDB((err, client) => {
        const db = client.db(dbName);
        db.collection(collectionName).find(json).limit(limitNumber).skip(skipNumber).toArray(function(err, docs) {
            callback(err, docs);
            client.close();
        });
    })
}

// 删除数据
exports.delete = function(dbName, collectionName, json, callback) {
    _connectDB((err, client) => {
        const db = client.db(dbName);
        db.collection(collectionName).deleteMany(json, (err, result) => {
            callback(err, result);
            client.close();
        })
    })
}

// 修改数据
exports.update = function(dbName, collectionName, json1, json2, callback) {
    _connectDB((err, client) => {
        const db = client.db(dbName);
        db.collection(collectionName).updateMany(json1, json2, (err, result) => {
            callback(err, result);
            client.close();
        })
    })
}


