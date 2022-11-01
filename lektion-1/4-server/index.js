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
  // res.setHeader('Content-type', 'text/html');

  // let fileName;
  // switch(req.url) {
  //   case '/':
  //     fileName = 'index.html'
  //     res.statusCode = 200;
  //     break;
  //   case '/about':
  //     fileName = 'about.html'
  //     res.statusCode = 200;
  //     break;
  //   case '/about-us':
  //     res.statusCode = 301;
  //     res.setHeader('Location', '/about');
  //     res.end();
  //     break;
  //   default:
  //     fileName = '404.html'
  //     res.statusCode = 404;
  // }

  // let filePath = path.join(__dirname, 'pages', fileName)

  // fs.readFile(filePath, (err, data) => {
  //   if(err) {
  //     console.log(err)
  //     res.end()
  //   }
  //   res.end(data)
  // })

  let filePath
  console.log(req.url)
  if(req.url === '/') {
    filePath = path.join(__dirname, 'pages', 'index.html')
  } else {
    filePath = path.join(__dirname, 'pages', req.url + '.html')
  }
  fs.readFile(filePath, (err,data) => {
    if(err && err.code === 'ENOENT') {

        fs.readFile(path.join(__dirname, 'pages', '404.html'), (err, data) => {
        if(err) {
          console.log(err)
          res.end()
        }
        res.end(data)
      })

    } 
    else {
      res.end(data)
    }
  })

})


const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
  console.log('server running och http://localhost:' + PORT)
})