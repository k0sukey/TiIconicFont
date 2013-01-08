#TiIconicFont

##What is this
Iconic font charcode wrapping library for Titanium Mobile.

##How to use
https://wiki.appcelerator.org/display/guides/Custom+Fonts

* Font Awesome
    * http://fortawesome.github.com/Font-Awesome using fontawesome-webfont.ttf
* Ligature Symbols
    * http://kudakurage.com/ligature_symbols/ ( https://github.com/kudakurage/LigatureSymbols ) using LigatureSymbols.ttf
* SS Pika
    * http://symbolset.com/ SSPika.ttf
* Resources/app.js

    var window = Ti.UI.createWindow();

    var fontawesome = require('lib/IconicFont').IconicFont({
        font: 'lib/FontAwesome',
        ligature: false // optional, for ligature
    });
    var fontawesomeLabel = Ti.UI.createLabel({
        font: { fontFamily: fontawesome.fontfamily() },
        text: fontawesome.icon('icon-github') // or text: fontawesome.icon([ 'icon-github', 'icon-facebook', 'icon-twitter' ]).join('')
    });
    window.add(fontawesomeLabel);

    var ligaturesymbols = require('lib/IconicFont').IconicFont({
        font: 'lib/LigatureSymbols',
        ligature: false // optional, for ligature
    });
    var ligaturesymbolsLabel = Ti.UI.createLabel({
        font: { fontFamily: ligaturesymbols.fontfamily() },
        text: ligaturesymbols.icon('twitter') // or text: ligaturesymbols.icon([ 'github', 'facebook', 'twitter' ]).join('')
    });
    window.add(ligaturesymbolsLabel);

    var sspika = require('lib/IconicFont').IconicFont({
        font: 'lib/ti.ss-pika',
        ligature: true // optional, for ligature
    });

    window.open();

##Credits
### Font Awesome
http://fortawesome.github.com/Font-Awesome

* The Font Awesome font is licensed under the SIL Open Font License - http://scripts.sil.org/OFL.
* Font Awesome CSS, LESS, and SASS files are licensed under the MIT License - http://opensource.org/licenses/mit-license.html.
* The Font Awesome pictograms are licensed under the CC BY 3.0 License - http://creativecommons.org/licenses/by/3.0/
* Attribution is no longer required in Font Awesome 3.0, but much appreciated: Font Awesome by Dave Gandy - http://fortawesome.github.com/Font-Awesome.
### Ligature Symbols
http://kudakurage.com/ligature_symbols/

You can get Ligature Symbols for free. This Font is licensed under the SIL Open Font License for download and using.
Ligature Symbols has broad support for the modern browser (Chrome, Safari, Firefox, iOS - Mobile Safari, Android Browser).
