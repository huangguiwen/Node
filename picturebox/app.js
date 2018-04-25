const express = require('express');
const router = require('./controller')
const app = express();

// 设置模板引擎
app.set('view engine', 'ejs');

//路由中间件
app.use(express.static('./public'));
app.get('/', router.showIndex);
app.get('/:albumName', router.showAlbum);
app.use((req, res) => {
    res.render('404')
})

app.listen(3000);