var http =require('http');

http.createServer(function (req, res) {
    res.write('hello world');
    res.end();
}).listen(3000);
console.log('Server running at 3000')
