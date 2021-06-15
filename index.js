// const person = require('./person');
// console.log(person);

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filepath = path.join(__dirname, 'public', req.url == '/' ? 'index.html' : req.url);
    let extname = path.extname(filepath);
    let contenttype = 'text/html';
    switch (extname) {
        case '.js':
            contenttype = 'text/javascript';
            break;
        case '.css':
            contenttype = 'text/css';
            break;
        case '.json':
            contenttype = 'application/json';
            break;
        case '.png':
            contenttype = 'image/png';
            break;
        case '.jpg':
            contenttype = 'image/jpg';
            break;
    }
    fs.readFile(filepath, (err, content) => {
        if (err) {
            if (err.code = 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');

                })

            } else {
                res.writeHead(500);
                res.end(`server error : ${err.code}`);
            }

        }
        else {
            res.writeHead(200, { 'Content-Type': contenttype });
            res.end(content, 'utf-8');
        }
    });

});

const PORT = process.env.port || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));