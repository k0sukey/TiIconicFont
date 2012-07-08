(function() {
	var window = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
/*
	var textField = Ti.UI.createTextField({
		top: 10,
		left: 10,
		width: 300,
		height: 30,
		borderWidth: 1,
		clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
		paddingLeft: 10,
		value: '',
		hintText: 'This is hintText',
		font: { fontSize: 18, fontFamily: 'FontopoSUBWAY' }
	});
	window.add(textField);
*/

	var fontawesome = require('FontAwesome').FontAwesome();

	var octocatLabel = Ti.UI.createLabel({
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
	window.add(octocatLabel);

	var baloonLabel = Ti.UI.createLabel({
		top: 150,
		right: 30,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		color: '#000',
		font: {
			fontSize: 100,
			fontFamily: 'FontAwesome'
		},
		text: fontawesome.icon('commentAlt')
	});
	window.add(baloonLabel);

	var awesomeLabel = Ti.UI.createLabel({
		top: 26,
		font: {
			fontSize: 14,
			fontWeight: 'bold'
		},
		text: 'Awesome!'
	});
	baloonLabel.add(awesomeLabel);

	window.open();
})();