var request = require('request');

var material = {};

request.get({
	url: 'https://raw.githubusercontent.com/google/material-design-icons/master/iconfont/codepoints',
}, function(error, response, body){
	if (error) {
		return;
	}
	
	body.split('\n').forEach(function(line){
		var icon = line.split(' ');
		material[icon[0]] = '0x'+icon[1];
	});
	
	for (var key in material) {
		console.log('\'%s\': %s,', key, material[key]);
	}
});