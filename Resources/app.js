(function() {
	var window = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});

	var fontawesome = require('lib/IconicFont').IconicFont({ font: 'lib/FontAwesome' });
	var ligaturesymbols = require('lib/IconicFont').IconicFont({ font: 'lib/LigatureSymbols' });

	var wrapView = Ti.UI.createView({
		height : 200
	});
	window.add(wrapView);

	[
		{ fromTop: 420, fromLeft: 0, toTop: 0, toLeft: 280 },
		{ fromTop: 420, fromLeft: 0, toTop: 0, toLeft: 200 },
		{ fromTop: 420, fromLeft: 0, toTop: 40, toLeft: 280 },
		{ fromTop: 420, fromLeft: 0, toTop: 100, toLeft: 280 },
		{ fromTop: 420, fromLeft: 0, toTop: 60, toLeft: 280 },
		{ fromTop: 420, fromLeft: 0, toTop: 0, toLeft: 260 },
		{ fromTop: 420, fromLeft: 0, toTop: 0, toLeft: 240 },
		{ fromTop: 420, fromLeft: 0, toTop: 0, toLeft: 220 },
		{ fromTop: 420, fromLeft: 0, toTop: 20, toLeft: 280 },
		{ fromTop: 420, fromLeft: 0, toTop: 80, toLeft: 280 }
	].forEach(function(value){
		var twitterLabel = Ti.UI.createLabel({
			top: value.fromTop,
			left: value.fromLeft,
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE,
			color: '#00aced',
			font: {
				fontSize: 48,
				fontFamily: ligaturesymbols.fontfamily()
			},
			text: ligaturesymbols.icon('twitter')
		});
		window.add(twitterLabel);

		var twitter = function(){
			twitterLabel.setTop(value.fromTop);
			twitterLabel.setLeft(value.fromLeft);
			twitterLabel.animate({
				duration: Math.floor(6 * Math.random()) * 1000,
				top: value.toTop,
				left: value.toLeft
			}, twitter);
		};
		twitter();
	});

	var octocatLabel = Ti.UI.createLabel({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		color: '#000',
		font: {
			fontSize: 100,
			fontFamily: fontawesome.fontfamily()
		},
		textAlign: 'center',
		text: fontawesome.icon('github')
	});
	wrapView.add(octocatLabel);

	var baloonLabel = Ti.UI.createLabel({
		top: 20,
		right: 30,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		color: '#000',
		font: {
			fontSize: 100,
			fontFamily: fontawesome.fontfamily()
		},
		text: fontawesome.icon('commentAlt')
	});
	wrapView.add(baloonLabel);

	var awesomeLabel = Ti.UI.createLabel({
		top: 45,
		right: 43,
		font: {
			fontSize: 14,
			fontWeight: 'bold'
		},
		color : 'black',
		text: 'Awesome!'
	});
	wrapView.add(awesomeLabel);

	window.open();
})();