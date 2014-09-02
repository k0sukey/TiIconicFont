function fixedFromCharCode (codePt) {  
  if (codePt > 0xFFFF) {  
    codePt -= 0x10000;  
    return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));  
  } else {  
    return String.fromCharCode(codePt);  
  }  
}

function IconicFont(params) {
	params = params || {};

	this._font = require(params.font);
}

Object.defineProperties(IconicFont.prototype, {
	font: {
		set: function(param){
			this._font = require(param);
		},
		get: function(){
			return this._font;
		}
	},
	fontfamily: {
		get: function(){
			return this._font.fontfamily;
		}
	}
});

IconicFont.prototype.icon = function(param){
	var result = [];

	if (!Array.isArray(param)) {
		param = [param];
	}

	for (var i = 0; i < param.length; i++) {
		result.push(fixedFromCharCode(this._font.charcode[param[i]]));
	}

	return result.join('');
};

module.exports = IconicFont;