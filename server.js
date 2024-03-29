const http = require("http");
const fs = require("fs")
const _ = require("lodash")

const server = http.createServer((req, res) => {
    console.log(_.random(0, 100))
    res.setHeader('Content-Type', 'text/html');
    let path = "./views/";

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("Error occured", err);
            res.end();
        } else {
            res.write(data);
            res.end()
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log("We are listening on port 3000")
});
