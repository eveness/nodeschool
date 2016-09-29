var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
var strings = data.toString().split('\n').length - 1;
console.log(strings);

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1