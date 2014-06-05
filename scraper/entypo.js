var request = require('request'),
	cheerio = require('cheerio');

var entypo = {};

request.get({
	url: 'http://www.entypo.com/characters/',
}, function(error, response, body){
	if (error) {
		return;
	}

	$ = cheerio.load(body, {
		normalizeWhitespace: true
	});
	$('section#map li').each(function(){
		entypo[$(this).attr('title')] = $(this).children('.unicode').text().replace('U+', '');
	});
	for (var key in entypo) {
		console.log('\'%s\': 0x%s,', key, entypo[key]);
	}
});