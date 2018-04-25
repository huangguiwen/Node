const fs = require('fs');

exports.getAllAlbums = (callback) => {
    fs.readdir('./uploads', (err, files) => {
        if(err) {
            callback('没有找到uploads文件夹！', null);
        }
        let allAlbums = [];
        (function iterator(i) {
            if(i == files.length) {
                callback(null, allAlbums);
                return false;
            }

            fs.stat('./uploads/' + files[i], (err, stats) => {
                if(err) {
                    callback(`找不到文件${files[i]}`, null);
                }
                if(stats.isDirectory()) {
                    allAlbums.push(files[i])
                }
                iterator(i+1);
            } )
        })(0)
    })
}