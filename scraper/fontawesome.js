var request = require('request'),
	cheerio = require('cheerio');

var fontawesome = {};

request.get({
	url: 'http://fortawesome.github.io/Font-Awesome/cheatsheet/',
}, function(error, response, body){
	if (error) {
		return;
	}

	$ = cheerio.load(body, {
		normalizeWhitespace: true
	});
	$('.col-md-4.col-sm-6.col-lg-3').each(function(){
		var div = $(this).text().match(/fa-.+/)[0].split(' ');
		fontawesome[div[0]] = div[div.length - 2].replace('[&#', '0').replace(';]', '');
	});
	for (var key in fontawesome) {
		console.log('\'%s\': %s,', key, fontawesome[key]);
	}
});