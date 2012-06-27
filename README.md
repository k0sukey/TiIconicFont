##What is this
FontAwesome charcode wrapping library for Titanium Mobile.

##How to use
https://wiki.appcelerator.org/display/guides/Custom+Fonts using fontawesome-webfont.ttf

    var window = Ti.UI.createWindow();
    
    var fontawesome = require('FontAwesome').FontAwesome();
    var label = Ti.UI.createLabel({
    	font: { fontFamily: 'FontAwesome' },
    	text: fontawesome.icon('github') // or text: fontawesome.icon([ 'github', 'facebook', 'twitter' ]).join('')
    });
    window.add(label);
    
    window.open();

##Credits
Version 2.0 of the Font Awesome font, CSS, and LESS files are licensed under CC BY 3.0:
http://creativecommons.org/licenses/by/3.0/
A mention of 'Font Awesome - http://fortawesome.github.com/Font-Awesome'
in human-readable source code is considered acceptable attribution (most common on the
web). If human readable source code is not available to the end user, a mention in an 'About' 
or 'Credits' screen is considered acceptable (most common in desktop or mobile software).
