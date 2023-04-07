const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break
    case '/about-us':
      res.setHeader('Location', '/about');
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += '404.html'
      res.statusCode = 200;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("Error occured!")
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000, 'localhost', () => {
  console.log("Listening on port 3000")
})


// const express = require('express');

// const app = express();

// app.listen(8000)

// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', { root: __dirname })
// })

// app.get('/about', (req, res) => {
//     res.sendFile('./views/about.html', { root: __dirname })
// })

// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// })

// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname })
// })