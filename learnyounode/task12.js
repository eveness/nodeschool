var http = require('http');

var server = http.createServer(function (req, res) {
	if (req.method != 'POST') return res.end('Error, expect POST\n');
	res.writeHead(200);
	var data = '';
    req.on('data', function(chunk) {
        data += chunk.toString();
    });
    req.on('end', function() {
        res.end(data.toUpperCase());
    });
});
server.listen(Number(process.argv[2]));