var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var data = null;
	var date = new Date(parsedUrl.query.iso);
	if(parsedUrl.pathname == '/api/parsetime') {
		data = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	}
	if(parsedUrl.pathname == '/api/unixtime') {
		data = {
			"unixtime": date.getTime()
		};
	}
	if(data) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(data));
	} else {
		res.writeHead(404);
		res.end();
	}	
});
server.listen(Number(process.argv[2]));