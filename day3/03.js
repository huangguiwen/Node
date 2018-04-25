const express = require('express');
const fs = require('fs');

const app = express();

app.use(test);

app.listen(3000);

function test(req, res, next) {
    let filePath = req.originalUrl;
    fs.readFile(`./${filePath}`, (err, data) => {
        if(err) {
            next();
            return false;
        }
        res.send(data.toString());
    })
}