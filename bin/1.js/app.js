webpackJsonp([1],{

/***/ 3:
/*!**********************************!*\
  !*** ./src/js/startAnimation.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canvas = document.querySelector('.canvas');
	var sun = document.querySelector('.sun');
	var moon = document.querySelector('.moon');
	
	exports.default = function (color) {
	  __webpack_require__.e/* nsure */(2, function (require) {
	    var _require = __webpack_require__(/*! ./modules/actions */ 4);
	
	    var paint = _require.paint;
	    var animate = _require.animate;
	
	    paint(canvas, color);
	    animate(sun, 'active');
	    animate(moon, 'active');
	  });
	};

/***/ }

});
//# sourceMappingURL=app.js.map