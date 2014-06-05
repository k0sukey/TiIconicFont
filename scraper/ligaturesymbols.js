var request = require('request'),
	cheerio = require('cheerio');

var ligaturesymbols = {},
	ligature = [],
	unicode = [];

request.get({
	url: 'http://kudakurage.com/ligature_symbols/index.html',
}, function(error, response, body){
	if (error) {
		return;
	}

	$ = cheerio.load(body, {
		normalizeWhitespace: true
	});
	$('td.ligature').each(function(){
		if ($(this).text() !== '') {
			ligature.push($(this).text());
		}
	});
	$('td.unicode').each(function(){
		if ($(this).text() !== '') {
			unicode.push($(this).text());
		}
	});
	for (var i = 0; i < ligature.length; i++) {
		var tmp = ligature[i].split(',');
		for (var j = 0; j < tmp.length; j++) {
			tmp[j] = tmp[j].trim();
			ligaturesymbols[tmp[j]] = unicode[i].replace('\\', '');
		}
	}
	for (var key in ligaturesymbols) {
		console.log('\'%s\': 0x%s,', key, ligaturesymbols[key]);
	}
});