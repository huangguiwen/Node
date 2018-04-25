const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('02', {
        'news': ['陈', '佳', '敏']
    })
})

app.listen(3000);