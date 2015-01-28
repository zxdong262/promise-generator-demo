var http = require('http')
,fs = require('fs')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  //read file
  fs.readFile('a.txt',  function(err, txt) {
    response.end(txt)
  })
}).listen(8124)

console.log('Server running at http://127.0.0.1:8124/')