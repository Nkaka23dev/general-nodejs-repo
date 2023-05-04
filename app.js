const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    fs.readFile("./view/index.html", (error, data) => {
        if (error) {
            console.log(error)
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})
server.listen(8000, "localhost", () => {
    console.log("Server Created on port 8000")
})