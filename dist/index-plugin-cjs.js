/**
 * ==============================
 * welcome to rollup
 * this is a rollup test project
 * ==============================
 **/
'use strict';

var test = require('sam-test-data');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var test__namespace = /*#__PURE__*/_interopNamespace(test);

console.log(test__namespace);
var main = test__namespace.random;

module.exports = main;
/**
 * ====================
 * powered by ghosthao
 * copyright 2021
 * ====================
 **/
