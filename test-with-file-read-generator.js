var http = require('http')
,fs = require('fs')
,co = require('co')
,readFile = function(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file,  function(err, fileContent) {
      if(err) reject(err)
      else resolve(fileContent)
    })
  })
}

http.createServer(function (request, response) {
	var txt = ''
  response.writeHead(200, {'Content-Type': 'text/plain'})

  //read file
  var cof = co.wrap(function* () {
    var a = yield readFile('a.txt')
    var b = yield readFile('b.txt')
    var c = yield readFile('c.txt')
    return a + b + c
  })
  
  cof()
  .then(function(txt) {
    response.end(txt)
  })
}).listen(8124)

console.log('Server running at http://127.0.0.1:8124/')