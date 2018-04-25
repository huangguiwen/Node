let express = require('express');


let app = express();

app.get('/', (req, res) => {
    res.send('!!!!!');
})

app.get(/^\/student\/([\d]{10})$/, (req, res) => {
    res.send(`学生学号${ req.params[0] }`);
})

app.get('/teacher/:gonghao', (req, res) => {
    res.send(`老师工号${ req.params.gonghao }`);
})


app.listen(3000, '127.0.0.1')