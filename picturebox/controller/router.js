const file = require('../models/file.js');

// 首页
exports.showIndex = (req, res) => {
    file.getAllAlbums((err, allAlbums) => {
        if(err) {
            console.log(err);
            return false;
        }
        res.render('index', {
            album: allAlbums
        });
    })
}

exports.showAlbum = (req, res) => {
    let albumName = req.params.albumName;
}