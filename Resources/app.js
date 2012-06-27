(function() {
	var window = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});

	var textLabel = Ti.UI.createLabel({
		top: 10,
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		color: '#000',
		textAlign: 'center',
		text: 'This is FontAwesome!'
	});
	window.add(textLabel);

	var fontawesome = require('FontAwesome').FontAwesome();

	var iconLabel = Ti.UI.createLabel({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		color: '#000',
		font: {
			fontSize: 100,
			fontFamily: 'FontAwesome'
		},
		textAlign: 'center',
		text: fontawesome.icon('github')
	});
	window.add(iconLabel);

	window.open();
})();