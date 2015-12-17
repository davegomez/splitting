webpackJsonp([2],{

/***/ 4:
/*!***********************************!*\
  !*** ./src/js/modules/actions.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var animate = exports.animate = function animate(node, className) {
	    return node.className === className ? node.classList.remove(className) : node.classList.add(className);
	};
	
	var paint = exports.paint = function paint(node, color) {
	    return node.style.backgroundColor = color;
	};

/***/ }

});
//# sourceMappingURL=app.js.map