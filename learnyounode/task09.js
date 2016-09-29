var http = require('http');
var recieved = [];
var processed = 0;

function httpGet(index) {
	var url = process.argv[index + 2];
	http.get(url, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(data) {
			recieved[index] += data;
		});
		res.on('end', function() {
			processed++;
			if(processed === 3) {
				console.log(recieved.join('\n'));
			}
		});
		res.on('error', console.error);
	}).on('error', console.error);
}

for (var i = 0; i < 3; i++) {
	recieved[i] = '';
	httpGet(i);
}
