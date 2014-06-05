var request = require('request'),
	cheerio = require('cheerio');

var typicons = {};

request.get({
	url: 'http://typicons.com/',
}, function(error, response, body){
	if (error) {
		return;
	}

	$ = cheerio.load(body, {
		normalizeWhitespace: true
	});
	$('div.icon').each(function(){
		typicons[$(this).data('name')] = $(this).data('code');
	});
	for (var key in typicons) {
		console.log('\'%s\': %s,', key, typicons[key]);
	}
});