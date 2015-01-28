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
	var txt = ''
  response.writeHead(200, {'Content-Type': 'text/plain'})

  //read file
  readFile('a.txt')
  .then(function(tx) {
    txt = txt + tx
    return readFile('b.txt')
  })
  .then(function(tx) {
    txt = txt + tx
    return readFile('c.txt')
  })
  .then(function(tx) {
    txt = txt + tx
    response.end(txt)
  })
  .catch(function(err) {
    console.log(err.stack)
  })
}).listen(8124)

console.log('Server running at http://127.0.0.1:8124/')