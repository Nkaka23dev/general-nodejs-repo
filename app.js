const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;
        default:
            res.statusCode = 404;
            path += '404.html'
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log("Error occured In teh terminal", error);
        }
        res.write(data);
        res.end();
    })

})

server.listen(8000, 'localhost', () => {
    console.log("Communicate with our server on port 8000")
})
