var http = require('http')
,fs = require('fs')

http.createServer(function (request, response) {
	var txt = ''
  response.writeHead(200, {'Content-Type': 'text/plain'})

  //read file
  fs.readFile('a.txt',  function(err, txt1) {
    txt = txt + txt1
    fs.readFile('b.txt',  function(err, txt2) {
      txt = txt + txt2
      fs.readFile('c.txt',  function(err, txt3) {
        txt = txt + txt3
        response.end(txt)
      })
    })
  })
}).listen(8124)

console.log('Server running at http://127.0.0.1:8124/')