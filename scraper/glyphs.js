var request = require('request');

var glyphs = {};

request.get({
	url: 'http://www.webhostinghub.com/glyphs/css/whhg.css',
}, function(error, response, body){
	if (error) {
		return;
	}

	var matches = body.match(/\.icon-.+:before\{content:\'\\.+\'\}/g) || [];
	for (var i = 0; i < matches.length; i++) {
		var parts = matches[i].split(':');
		glyphs[parts[0].replace('.', '')] = parts[2].replace('\'\\', '').replace('\'}', '');
	}
	for (var key in glyphs) {
		console.log('\'%s\': 0x%s,', key, glyphs[key]);
	}
});