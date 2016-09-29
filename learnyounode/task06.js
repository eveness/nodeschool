var module = require('./module.js');

var folder = process.argv[2];
var ext = process.argv[3];

module(folder, ext, function(err, files) {
	if (err) return console.error(err);
	console.log(files.join('\n'));
});