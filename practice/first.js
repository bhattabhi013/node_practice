const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(res);
      // res.writeHead(200, {'Content-Type': 'text/json'});
      res.setHeader('Content-type', 'text-plain');
      res.write('Hello World!');
      res.end();
})
server.listen(port, ()=>{
    console.log(`listening at ${port}`);
  });
// var http = require('http');
// const port = process.env.PORT || 3000;
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/json'});
//   res.write('Hello World!');
//   res.end();
// });

// server.listen(port, ()=>{
//   console.log(`listening at ${port}`);
// });

