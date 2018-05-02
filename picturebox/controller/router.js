const file = require('../models/file.js');

// 首页
exports.showIndex = (req, res, next) => {
    file.getAllAlbums((err, allAlbums) => {
        if(err) {
            next();
            return false;
        }
        res.render('index', {
            album: allAlbums
        });
    })
}

exports.showAlbum = (req, res, next) => {
    let albumName = req.params.albumName;
    file.getAllImagesByAlbumName(albumName, (err, imagesArray) => {
        if(err) {
            next();
            return false;
        }
        res.render('album', {
            albumName: albumName,
            images: imagesArray
        })
    })
    
}