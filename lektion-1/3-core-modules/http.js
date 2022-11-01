const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url);
  console.log(req.method);

  // res.write('<h1>HELLO Wolrd</h1>')
  // res.end();

  res.end('<h1>HELLO Wolrd</h1>')
})


server.listen(9999, () => console.log('server running on http://localhost:9999'))