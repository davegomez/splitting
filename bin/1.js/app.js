webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/*!*************************!*\
  !*** ./src/js ^\.\/.*$ ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./first/hello": 5,
		"./first/hello.js": 5,
		"./second/testing": 6,
		"./second/testing.js": 6
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/*!*******************************!*\
  !*** ./src/js/first/hello.js ***!
  \*******************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  return console.log("Hello " + name);
	};

/***/ },
/* 6 */
/*!**********************************!*\
  !*** ./src/js/second/testing.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var add = exports.add = function add(x, y) {
	  return x + y;
	};
	
	var multiply = exports.multiply = function multiply(x, y) {
	  return x * y;
	};
	
	var square = exports.square = function square(x) {
	  return x * x;
	};
	
	var dave = exports.dave = {
	  name: 'Dave',
	  lasName: 'Gómez'
	};

/***/ }
]);
//# sourceMappingURL=app.js.map