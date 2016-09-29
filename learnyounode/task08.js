var http = require('http');
var url = process.argv[2];

var recieved = '';

http.get(url, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		recieved += data;
	});
	res.on('end', function() {
		console.log(recieved.length);
		console.log(recieved);
	});
	res.on('error', console.error);
}).on('error', console.error);