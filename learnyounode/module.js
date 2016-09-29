var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext, cb) {
	fs.readdir(folder, function(err, files) {
		if (err) return cb(err);
		files = files.filter(function(file) {
			return path.extname(file) === '.' + ext;
		});
		return cb(null, files);
	});
}