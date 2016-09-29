var net = require('net');

function zeroFill(num) {
	return (num < 10 ? '0' : '') + num;
}

function now() {
	var d = new Date();
	return d.getFullYear() + '-'
		+ zeroFill(d.getMonth() + 1) + '-'
		+ zeroFill(d.getDate()) + ' '
		+ zeroFill(d.getHours()) + ':'
		+ zeroFill(d.getMinutes());
}

var server = net.createServer(function(socket) {
	socket.end(now() + '\n');
});
server.listen(Number(process.argv[2]));