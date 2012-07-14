(function() {
	var window = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	
	var osname = Ti.Platform.osname;
	var os = function(/*Object*/ map) {
		var def = map.def||null; //default function or value
		if (map[osname]) {
			if (typeof map[osname] == 'function') { return map[osname](); }
			else { return map[osname]; }
		}
		else {
			if (typeof def == 'function') { return def(); }
			else { return def; }
		}
	};

	var fontawesome = require('FontAwesome').FontAwesome();
	
	var wrapView = Ti.UI.createView({
		height : 200
	});
	window.add(wrapView);
	
	var octocatLabel = Ti.UI.createLabel({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		color: '#000',
		font: {
			fontSize: 100,
			fontFamily: os({
				iphone : 'FontAwesome',
				ipad : 'FontAwesome',
				android : 'fontawesome-webfont'
			})
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
			fontFamily: os({
				iphone : 'FontAwesome',
				ipad : 'FontAwesome',
				android : 'fontawesome-webfont'
			})
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