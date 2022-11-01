const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  // fs.readFile('./pages/index.html', (err, data) => {
  //   if(err) {
  //     console.log(err)
  //     res.end()
  //   }
  //   res.end(data)
  // })
  // console.log(req.url)
  res.setHeader('Content-type', 'text/html');

  let fileName;
  switch(req.url) {
    case '/':
      fileName = 'index.html'
      res.statusCode = 200;
      break;
    case '/about':
      fileName = 'about.html'
      res.statusCode = 200;
      break;
    default:
      fileName = '404.html'
      res.statusCode = 404;
  }

  let filePath = path.join(__dirname, 'pages', fileName)

  fs.readFile(filePath, (err, data) => {
    if(err) {
      console.log(err)
      res.end()
    }
    res.end(data)
  })

})


const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
  console.log('server running och http://localhost:' + PORT)
})