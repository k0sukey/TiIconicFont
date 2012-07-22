var exports = exports || this;
exports.IconicFont = (function(global){
	var K = function(){};

	var IconicFont = function(options) {
		var self;

		if (this instanceof IconicFont) {
			self = this;
		} else {
			self = new K();
		}

		if (!options) { options = {}; }
		var Font = require(options.font);
		self.font = new Font();

		return self;
	};

	K.prototype = IconicFont.prototype;

	IconicFont.prototype.icon = function(options){
		var self = this;

		if (options instanceof Array) {
			var icons = [];

			options.forEach(function(value){
				icons.push(String.fromCharCode(self.font.getCharcode(value)));
			});

			return icons;
		} else {
			return String.fromCharCode(self.font.getCharcode(options));
		}
	};

	IconicFont.prototype.fontfamily = function(){
		var self = this;

		return self.font.fontfamily;
	};

	return IconicFont;
})(this);