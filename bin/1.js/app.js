webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/*!*************************!*\
  !*** ./src/js ^\.\/.*$ ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./hello": 3,
		"./hello.js": 3
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
/* 3 */
/*!*************************!*\
  !*** ./src/js/hello.js ***!
  \*************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  return console.log("Hello " + name);
	};

/***/ }
]);
//# sourceMappingURL=app.js.map