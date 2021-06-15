const http = require("http");
const fs = require("fs");
const text = fs.readFileSync("index.html");
// text = text.replace("browser", "rohan");
// console.log("the content of the file is ")
// console.log(text);
// console.log("creating a new file....")
// fs.writeFileSync("rohan.txt", text);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(text)
});

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to port 8000");
});
