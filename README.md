#TiIconicFont

##What is this
Iconic font charcode wrapping library for Titanium Mobile.

##How to use
https://wiki.appcelerator.org/display/guides/Custom+Fonts

* Font Awesome
    * http://fortawesome.github.com/Font-Awesome using fontawesome-webfont.ttf
* Ligature Symbols
    * http://kudakurage.com/ligature_symbols/ using LigatureSymbols.ttf
* Resources/app.js

    var window = Ti.UI.createWindow();
    
    var fontawesome = require('lib/IconicFont').IconicFont({ font: 'lib/FontAwesome' });
    var fontawesomeLabel = Ti.UI.createLabel({
        font: { fontFamily: fontawesome.fontfamily() },
        text: fontawesome.icon('github') // or text: fontawesome.icon([ 'github', 'facebook', 'twitter' ]).join('')
    });
    window.add(fontawesomeLabel);
    
    var ligaturesymbols = require('lib/IconicFont').IconicFont({ font: 'lib/LigatureSymbols' });
    var ligaturesymbolsLabel = Ti.UI.createLabel({
        font: { fontFamily: ligaturesymbols.fontfamily() },
        text: ligaturesymbols.icon('twitter') // or text: ligaturesymbols.icon([ 'github', 'facebook', 'twitter' ]).join('')
    });
    window.add(ligaturesymbolsLabel);
    
    window.open();

##Credits
### Font Awesome
http://fortawesome.github.com/Font-Awesome

Version 2.0 of the Font Awesome font, CSS, and LESS files are licensed under CC BY 3.0:
http://creativecommons.org/licenses/by/3.0/
A mention of 'Font Awesome - http://fortawesome.github.com/Font-Awesome'
in human-readable source code is considered acceptable attribution (most common on the
web). If human readable source code is not available to the end user, a mention in an 'About'
or 'Credits' screen is considered acceptable (most common in desktop or mobile software).
### Ligature Symbols
http://kudakurage.com/ligature_symbols/

You can get Ligature Symbols for free. This Font is licensed under the SIL Open Font License for download and using.
Ligature Symbols has broad support for the modern browser (Chrome, Safari, Firefox, iOS - Mobile Safari, Android Browser).
