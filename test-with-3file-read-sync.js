var http = require('http')
,fs = require('fs')
,readFile = function(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file,  function(err, fileContent) {
      if(err) reject(err)
      else resolve(fileContent)
    })
  })
}
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})

  //read file
  Promise.all([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')])
  .then(function(a, b, c) {
    response.end(a + b + c)
  })
  .catch(function(err) {
    console.log(err.stack)
  })
}).listen(8124)

console.log('Server running at http://127.0.0.1:8124/')