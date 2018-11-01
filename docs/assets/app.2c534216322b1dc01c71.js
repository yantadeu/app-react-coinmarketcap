/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "2c534216322b1dc01c71" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/front/index.js","vendors","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/Root.js":
/*!***************************!*\
  !*** ./src/front/Root.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store/configureStore */ "./src/front/redux/store/configureStore.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/scrollToTop/ScrollToTop */ "./src/front/components/scrollToTop/ScrollToTop.js");
/* harmony import */ var _hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hoc/withMainLayout */ "./src/front/hoc/withMainLayout/index.js");
/* harmony import */ var _routes_MainRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/MainRoutes */ "./src/front/routes/MainRoutes.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/routes */ "./src/front/routes/routes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// #region imports










 // #endregion
// #region flow types

// #endregion
// #region constants
var MainApp = recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(Object(_hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_7__["default"])())(_routes_MainRoutes__WEBPACK_IMPORTED_MODULE_8__["default"]);
var store = _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5___default()(); // #endregion

var Root =
/*#__PURE__*/
function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, _getPrototypeOf(Root).apply(this, arguments));
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["ConnectedRouter"], {
        history: _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["history"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainApp, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "*",
        component: _routes_routes__WEBPACK_IMPORTED_MODULE_9__["PageNotFound"]
      })))));
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/front/components/backToTop/BackToTop.js":
/*!*****************************************************!*\
  !*** ./src/front/components/backToTop/BackToTop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backToTopButton/BackToTopButton */ "./src/front/components/backToTop/backToTopButton/BackToTopButton.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-undefined */
// #region imports


 // #endregion
// #region flow types

// #endregion
var BackToTop =
/*#__PURE__*/
function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BackToTop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BackToTop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      windowScrollY: 0,
      showBackButton: false,
      tickingScollObserve: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowScroll", function () {
      if (window) {
        var _this$state = _this.state,
            windowScrollY = _this$state.windowScrollY,
            tickingScollObserve = _this$state.tickingScollObserve;
        var minScrollY = _this.props.minScrollY;
        /* eslint-disable no-undefined */

        var currentWindowScrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        /* eslint-enable no-undefined */
        // scroll event fires to often, using window.requestAnimationFrame to limit computations

        if (!tickingScollObserve) {
          window.requestAnimationFrame(function () {
            if (windowScrollY !== currentWindowScrollY) {
              var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;

              _this.setState({
                windowScrollY: currentWindowScrollY,
                showBackButton: shouldShowBackButton
              });
            }

            _this.setState({
              tickingScollObserve: false
            });
          });
        }

        _this.setState({
          tickingScollObserve: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlesOnBackButtonClick", function (event) {
      if (event) {
        event.preventDefault();
      }

      var minScrollY = _this.props.minScrollY;
      var windowScrollY = _this.state.windowScrollY;

      if (window && windowScrollY && windowScrollY > minScrollY) {
        // using here smoothscroll-polyfill
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); // smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollDone", function () {
      var onScrollDone = _this.props.onScrollDone;

      if (onScrollDone) {
        onScrollDone();
      }
    });

    return _this;
  }

  _createClass(BackToTop, [{
    key: "componentWillMount",
    // #region lifecycle methods
    value: function componentWillMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var showBackButton = this.state.showBackButton;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"], {
        style: {
          x: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(showBackButton ? 0 : 120, react_motion__WEBPACK_IMPORTED_MODULE_2__["presets"].stiff)
        }
      }, function (_ref) {
        var x = _ref.x;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          position: 'bottom-right',
          onClick: _this2.handlesOnBackButtonClick,
          motionStyle: {
            WebkitTransform: "translate3d(".concat(x, "px, 0, 0)"),
            transform: "translate3d(".concat(x, "px, 0, 0)")
          }
        });
      });
    } // #endregion
    // #region on windows scroll callback
    // #endregion

  }]);

  return BackToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(BackToTop, "defaultProps", {
  minScrollY: 120,
  onScrollDone: function onScrollDone() {}
});

/* harmony default export */ __webpack_exports__["default"] = (BackToTop);

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/BackToTopButton.js":
/*!***************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/BackToTopButton.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpIcon */ "./src/front/components/backToTop/backToTopButton/UpIcon.js");
/* harmony import */ var _styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/WithRightMargin */ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports



 // #endregion
// #region flow types

// #endregion
// #region constants
var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor
}; // #endregion

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;
  var buttonStyle = setPosition(position, _objectSpread({}, motionStyle, defaultStyle));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: buttonStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      btn: true
    }),
    onClick: onClick
  }, !children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: '#F1F1F1'
  })), !!children && children);
}; // #region statics


BackToTopButton.defaultProps = {
  position: 'bottom-right'
};
BackToTopButton.displayName = 'BackToTopButton'; // #endregion
// #region helpers

function setPosition() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;

  var style = _objectSpread({}, refStyle);

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
} // #endregion


/* harmony default export */ __webpack_exports__["default"] = (BackToTopButton);

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/UpIcon.js":
/*!******************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/UpIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// #region imports
 // #endregion
// #region flow types

// #endregion
var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 512 512",
    fill: "".concat(color)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"
  }));
}; // #region statics


UpIcon.defaultProps = {
  color: '#F1F1F1'
};
UpIcon.displayName = 'UpIcon'; // #endregion

/* harmony default export */ __webpack_exports__["default"] = (UpIcon);

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js":
/*!**********************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports
 // #endregion

var WithRightMargin = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (WithRightMargin);

/***/ }),

/***/ "./src/front/components/navigation/NavigationBar.js":
/*!**********************************************************!*\
  !*** ./src/front/components/navigation/NavigationBar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports



// #endregion
var NavigationBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavigationBar, _PureComponent);

  function NavigationBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (evt) {
      if (evt) {
        evt.preventDefault();
      }

      _this.setState(function (_ref) {
        var prevIsOpened = _ref.isOpen;
        return {
          isOpen: !prevIsOpened
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlesNavItemClick", function () {
      var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
      return function (evt) {
        if (evt) {
          evt.preventDefault();
        }

        var history = _this.props.history;
        history.push(link);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlesDisconnect", function (evt) {
      if (evt) {
        evt.preventDefault();
      }

      var _this$props = _this.props,
          history = _this$props.history,
          disconnectUser = _this$props.disconnectUser;
      disconnectUser();
      history.push('/');
    });

    return _this;
  }

  _createClass(NavigationBar, [{
    key: "render",
    // #region lifecycle
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          brand = _this$props2.brand,
          rightLinks = _this$props2.navModel.rightLinks;
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
        color: "dark",
        dark: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
        href: "/"
      }, brand), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
        onClick: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
        isOpen: isOpen,
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, rightLinks.map(function (_ref2, index) {
        var label = _ref2.label,
            link = _ref2.link,
            viewName = _ref2.viewName;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
          key: "".concat(index)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          href: "#",
          onClick: _this2.handlesNavItemClick(link),
          color: "white"
        }, label));
      }))));
    } // #endregion
    // #region navigation bar toggle
    // #endregion

  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(NavigationBar, "defaultProps", {
  brand: 'brand'
});

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./src/front/components/navigation/index.js":
/*!**************************************************!*\
  !*** ./src/front/components/navigation/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.js");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationBar */ "./src/front/components/navigation/NavigationBar.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports





 // #endregion
// #region redux map state and dispatch to props

var mapStateToProps = function mapStateToProps(state) {
  return {
    token: state.userAuth.token,
    isAuthenticated: state.userAuth.isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_objectSpread({}, _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_4__), dispatch);
}; // #endregion


/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps), react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(_NavigationBar__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./src/front/components/scrollToTop/ScrollToTop.js":
/*!*********************************************************!*\
  !*** ./src/front/components/scrollToTop/ScrollToTop.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// #region imports

 // #endregion
// #region flow types

// #endregion
var ScrollToTop =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTop).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: "componentDidUpdate",
    // #region lifecycle
    value: function componentDidUpdate(prevProps) {
      if (window) {
        var prevLocation = prevProps.location;
        var nextLocation = this.props.location;

        if (prevLocation !== nextLocation) {
          window.scrollTo(0, 0);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    } // #endregion

  }]);

  return ScrollToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollToTop));

/***/ }),

/***/ "./src/front/config/appConfig.js":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.js ***!
  \***************************************/
/*! exports provided: appConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
  DEV_MODE: true,
  // block fetch
  // api endpoints:
  api: {
    fakeEndPoint: 'api/somewhere',
    users: 'api/someusersapi'
  },
  // sw path
  sw: {
    path: 'public/assets/sw.js'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (appConfig);

/***/ }),

/***/ "./src/front/config/navigation.js":
/*!****************************************!*\
  !*** ./src/front/config/navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// #flow types
// #endregion
var navigation = {
  brand: 'App React CoinMarketCap',
  leftLinks: [],
  rightLinks: [{
    label: 'Home',
    link: '/'
  }, {
    label: 'Cotações',
    link: '/tickers',
    view: 'tickers',
    isRouteBtn: true
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/index.js":
/*!***********************************************!*\
  !*** ./src/front/hoc/withMainLayout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withMainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMainLayout */ "./src/front/hoc/withMainLayout/withMainLayout.js");

/* harmony default export */ __webpack_exports__["default"] = (_withMainLayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/withMainLayout.js":
/*!********************************************************!*\
  !*** ./src/front/hoc/withMainLayout/withMainLayout.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/navigation */ "./src/front/components/navigation/index.js");
/* harmony import */ var _components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/backToTop/BackToTop */ "./src/front/components/backToTop/BackToTop.js");
/* harmony import */ var _config_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/navigation */ "./src/front/config/navigation.js");
/* harmony import */ var _services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/front/services/sw/registerServiceWorker.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports







 // #endregion
// #region flow types

// #endregion
// #region withMainLayout HOC
function withMainLayout()
/* no args option yet, but could pass them here */
{
  return function (BaseComponent) {
    // #region returned Component
    var WithMainLayout =
    /*#__PURE__*/
    function (_Component) {
      _inherits(WithMainLayout, _Component);

      function WithMainLayout() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, WithMainLayout);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithMainLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          navModel: _config_navigation__WEBPACK_IMPORTED_MODULE_6__["default"]
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLeftNavItemClick", function (event, viewName) {// something to do here?
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRightNavItemClick", function (event, viewName) {// something to do here?
        });

        return _this;
      }

      _createClass(WithMainLayout, [{
        key: "componentDidMount",
        // #region lifecycle
        value: function componentDidMount() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
            // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
            Object(_services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_7__["default"])();
          }
        }
      }, {
        key: "render",
        value: function render() {
          /* eslint-disable no-unused-vars */
          var _this$props = this.props,
              history = _this$props.history,
              location = _this$props.location,
              match = _this$props.match,
              passProps = _objectWithoutProperties(_this$props, ["history", "location", "match"]);
          /* eslint-enable no-unused-vars */


          var navModel = this.state.navModel;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: "appContainer"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
            brand: navModel.brand,
            navModel: navModel,
            handleLeftNavItemClick: this.handleLeftNavItemClick,
            handleRightNavItemClick: this.handleRightNavItemClick
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "container-fluid"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_5__["default"], {
            minScrollY: 40,
            scrollTo: 'appContainer'
          }));
        } // #endregion

        /* eslint-disable no-unused-vars*/

        /* eslint-enable no-unused-vars*/

      }]);

      return WithMainLayout;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // #region add static displayName for dev

    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithMainLayout.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withMainLayout');
    }
    /* eslint-enable no-process-env */
    // #endregion


    return recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(WithMainLayout);
  };
} // #endregion


/* harmony default export */ __webpack_exports__["default"] = (withMainLayout);

/***/ }),

/***/ "./src/front/index.js":
/*!****************************!*\
  !*** ./src/front/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "./node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_injectGlobalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/injectGlobalStyles */ "./src/front/style/injectGlobalStyles.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Root */ "./src/front/Root.js");
// #region imports









 // #endregion
// #region constants

var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP); // #endregion
// #region globals (styles, polyfill ...)

smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

window.snapSaveState = function () {
  return Object(loadable_components__WEBPACK_IMPORTED_MODULE_5__["getState"])();
};

Object(_style_injectGlobalStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(); // #endregion
// #region render (with hot reload if dev)

var renderApp = function renderApp(RootComponent) {
  var Application = function Application() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RootComponent, null));
  };

  if (bootstrapedElement.hasChildNodes()) {
    Object(loadable_components__WEBPACK_IMPORTED_MODULE_5__["loadComponents"])().then(function () {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Application, null), bootstrapedElement);
    });
  } else {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Application, null), bootstrapedElement);
  }
};

renderApp(_Root__WEBPACK_IMPORTED_MODULE_8__["default"]);

if (false) {} // #endregion

/***/ }),

/***/ "./src/front/mock/fakeAPI.json":
/*!*************************************!*\
  !*** ./src/front/mock/fakeAPI.json ***!
  \*************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"id":1,"label":"item 1"},{"id":2,"label":"item 2"}];

/***/ }),

/***/ "./src/front/mock/userInfosMock.json":
/*!*******************************************!*\
  !*** ./src/front/mock/userInfosMock.json ***!
  \*******************************************/
/*! exports provided: token, user, default */
/***/ (function(module) {

module.exports = {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}};

/***/ }),

/***/ "./src/front/redux/middleware/fetchMiddleware.js":
/*!*******************************************************!*\
  !*** ./src/front/redux/middleware/fetchMiddleware.js ***!
  \*******************************************************/
/*! exports provided: FETCH_MOCK, FETCH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOCK", function() { return FETCH_MOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports
 // #endregion
// #region constants

var FETCH_MOCK = 'FETCH_MOCK';
var FETCH = 'FETCH'; // #endregion
//
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//
// FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get',  // lower case, one of 'get', 'post'...
//    headers: {}     // OPTIONAL CONTENT like: data: { someprop: 'value ...}
//    options: {}     // OPTIONAL CONTENT like: Authorization: 'Bearer _A_TOKEN_'
//  }
// }
//
//
//
//

var fetchMiddleware = function fetchMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.fetch) {
        return next(action);
      }

      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
        return next(action);
      }

      if (!action.fetch.actionTypes) {
        return next(action);
      }
      /**
       * fetch mock
       * @type {[type]}
       */


      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult; // request

        store.dispatch({
          type: request
        }); // received successful for mock

        return Promise.resolve(store.dispatch({
          type: success,
          payload: {
            status: 200,
            data: mockResult
          }
        }));
      }

      if (action.fetch.type === FETCH) {
        var _action$fetch2 = action.fetch,
            _action$fetch2$action = _action$fetch2.actionTypes,
            _request = _action$fetch2$action.request,
            _success = _action$fetch2$action.success,
            fail = _action$fetch2$action.fail,
            url = _action$fetch2.url,
            method = _action$fetch2.method,
            headers = _action$fetch2.headers,
            options = _action$fetch2.options; // request

        store.dispatch({
          type: _request
        }); // fetch server (success or fail)
        // returns a Promise

        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.request(_objectSpread({
          method: method,
          url: url,
          withCredentials: true,
          headers: _objectSpread({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Acces-Control-Allow-Origin': '*'
          }, headers)
        }, options)).then(function (data) {
          return store.dispatch({
            type: _success,
            payload: data
          });
        }).catch(function (err) {
          store.dispatch({
            type: fail,
            error: err.response
          });
          return Promise.reject(err.response);
        });
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fetchMiddleware);

/***/ }),

/***/ "./src/front/redux/modules/fakeModuleWithFetch/index.js":
/*!**************************************************************!*\
  !*** ./src/front/redux/modules/fakeModuleWithFetch/index.js ***!
  \**************************************************************/
/*! exports provided: default, fakeFetchIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeFetchIfNeeded", function() { return fakeFetchIfNeeded; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_fakeAPI_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mock/fakeAPI.json */ "./src/front/mock/fakeAPI.json");
var _mock_fakeAPI_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../mock/fakeAPI.json */ "./src/front/mock/fakeAPI.json", 1);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/appConfig */ "./src/front/config/appConfig.js");
/* harmony import */ var _services_API_fetchTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/front/services/API/fetchTools.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports




// #endregion
// #region CONSTANTS
var REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
var RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
var ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH'; // #endregion
// #region flow types

// #endregion
// #region REDUCER
var initialState = {
  isFetching: false,
  actionTime: '',
  data: [],
  error: {}
}; // #endregion
// #region reducer

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var currentTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date());

  switch (action.type) {
    // #region request (fake)
    case REQUEST_FAKE_FETCH:
      {
        return _objectSpread({}, state, {
          actionTime: currentTime,
          isFetching: true
        });
      }

    case RECEIVED_FAKE_FETCH:
      {
        return _objectSpread({}, state, {
          actionTime: currentTime,
          isFetching: false,
          data: _toConsumableArray(action.payload)
        });
      }

    case ERROR_FAKE_FETCH:
      {
        return _objectSpread({}, state, {
          actionTime: currentTime,
          isFetching: false,
          error: action.error ? _objectSpread({}, action.error) : {}
        });
      }
    // #endregion

    default:
      return state;
  }
}); // #endregion
// #endregion
// #region ACTIONS CREATORS
// #region fetch example

function fakeFetch() {
  return function (dispatch) {
    var shouldFetchMock = _config_appConfig__WEBPACK_IMPORTED_MODULE_2__["default"].DEV_MODE;
    var fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
    var mockResult = _mock_fakeAPI_json__WEBPACK_IMPORTED_MODULE_1__;
    var url = "".concat(Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_3__["getLocationOrigin"])(), "/").concat(_config_appConfig__WEBPACK_IMPORTED_MODULE_2__["default"].api.fakeEndPoint);
    var method = 'get';
    var options = {}; // fetch middleware
    // -> you handles pure front or with back-end asyncs just by disaptching a single object
    //   -> just change config: appConfig.DEV_MODE

    return Promise.resolve(dispatch({
      // type name is not important here since fetchMiddleware will intercept this action:
      type: 'FETCH_MIDDLEWARE',
      // here are fetch middleware props:
      fetch: {
        type: fetchType,
        actionTypes: {
          request: REQUEST_FAKE_FETCH,
          success: RECEIVED_FAKE_FETCH,
          fail: ERROR_FAKE_FETCH
        },
        // props only used when type = FETCH_MOCK:
        mockResult: mockResult,
        // props only used when type = FETCH:
        url: url,
        method: method,
        options: options
      }
    }));
  };
}

function fakeFetchIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }

    return Promise.resolve();
  };
}

function shouldFakeFetch(state) {
  var isFetching = state.fakeModuleWithFetch.isFetching;

  if (isFetching) {
    return false;
  }

  return true;
} // #endregion
// #endregion

/***/ }),

/***/ "./src/front/redux/modules/reducers.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/reducers.js ***!
  \*********************************************/
/*! exports provided: reducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _fakeModuleWithFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fakeModuleWithFetch */ "./src/front/redux/modules/fakeModuleWithFetch/index.js");
/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userAuth */ "./src/front/redux/modules/userAuth/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports


 // #endregion

var reducers = {
  fakeModuleWithFetch: _fakeModuleWithFetch__WEBPACK_IMPORTED_MODULE_1__["default"],
  userAuth: _userAuth__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread({}, reducers)));

/***/ }),

/***/ "./src/front/redux/modules/userAuth/index.js":
/*!***************************************************!*\
  !*** ./src/front/redux/modules/userAuth/index.js ***!
  \***************************************************/
/*! exports provided: default, disconnectUser, checkUserIsConnected, logUserIfNeeded, fetchUserInfoDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectUser", function() { return disconnectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserIsConnected", function() { return checkUserIsConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logUserIfNeeded", function() { return logUserIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoDataIfNeeded", function() { return fetchUserInfoDataIfNeeded; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/appConfig */ "./src/front/config/appConfig.js");
/* harmony import */ var _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock/userInfosMock.json */ "./src/front/mock/userInfosMock.json");
var _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../mock/userInfosMock.json */ "./src/front/mock/userInfosMock.json", 1);
/* harmony import */ var _services_API_fetchTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/front/services/API/fetchTools.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth */ "./src/front/services/auth/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports





// #endregion
var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';
var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';
var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';
var DISCONNECT_USER = 'DISCONNECT_USER'; // #endregion
// #region flow types

// #endregion
// #region REDUCER
var initialState = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',
  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',
  token: null,
  isAuthenticated: false // authentication status (token based auth)

}; // #endregion
// #region reducer

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var currentTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date());

  switch (action.type) {
    case CHECK_IF_USER_IS_AUTHENTICATED:
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isAuthenticated: action.isAuthenticated,
        token: action.token || initialState.token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login: action.user && action.user.login ? action.user.login : initialState.login,
        firstname: action.user && action.user.firstname ? action.user.firstname : initialState.firstname,
        lastname: action.user && action.user.lastname ? action.user.lastname : initialState.firstname
      });

    case DISCONNECT_USER:
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname
      });
    // user login (get token and userInfo)

    case REQUEST_LOG_USER:
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isLogging: true
      });

    case RECEIVED_LOG_USER:
      var userLogged = action.payload.data;
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isAuthenticated: true,
        token: userLogged.token,
        id: userLogged.id,
        login: userLogged.login,
        firstname: userLogged.firstname,
        lastname: userLogged.lastname,
        isLogging: false
      });

    case ERROR_LOG_USER:
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        isLogging: false
      });
    // not used right now:

    case REQUEST_USER_INFOS_DATA:
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_USER_INFOS_DATA:
      var userInfos = action.payload.data;
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname
      });

    case ERROR_USER_INFOS_DATA:
      return _objectSpread({}, state, {
        actionTime: currentTime,
        isFetching: false
      });

    default:
      return state;
  }
}); // #endregion
// #endregion
// #region ACTIONS CREATORS
// #region disconnect user

function disconnectUser() {
  _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].clearAllAppStorage();
  return {
    type: DISCONNECT_USER
  };
} // #endregion
// #region check if user is connected

function checkUserIsConnected() {
  var token = _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].getToken();
  var user = _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].getUserInfo();

  var checkUserHasId = function checkUserHasId(obj) {
    return obj && obj._id;
  };

  var isAuthenticated = token && checkUserHasId(user) ? true : false;
  return _objectSpread({
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token: token
  }, user, {
    isAuthenticated: isAuthenticated
  });
} // #endregion
// #region loguser

function logUser(login, password) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var FETCH_TYPE, __SOME_LOGIN_API__, mockResult, url, method, headers, options;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                FETCH_TYPE = _config_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
                __SOME_LOGIN_API__ = 'login';
                mockResult = _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_2__; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

                url = "".concat(Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_3__["getLocationOrigin"])(), "/").concat(__SOME_LOGIN_API__);
                method = 'post';
                headers = {};
                options = {
                  credentials: 'same-origin',
                  data: {
                    login: login,
                    password: password
                  }
                }; // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)

                return _context.abrupt("return", dispatch({
                  type: 'FETCH_MIDDLEWARE',
                  fetch: {
                    // common props:
                    type: FETCH_TYPE,
                    actionTypes: {
                      request: REQUEST_LOG_USER,
                      success: RECEIVED_LOG_USER,
                      fail: ERROR_LOG_USER
                    },
                    // mock fetch props:
                    mockResult: mockResult,
                    // real fetch props:
                    url: url,
                    method: method,
                    headers: headers,
                    options: options
                  }
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function logUserIfNeeded(email, password) {
  return function (dispatch, getState) {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }

    return Promise.resolve();
  };
}

function shouldLogUser(state) {
  var isLogging = state.userAuth.isLogging;

  if (isLogging) {
    return false;
  }

  return true;
}

function fetchUserInfosData() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch) {
    var token = _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].getToken();
    var DEV_MODE = _config_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].DEV_MODE,
        users = _config_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].api.users;
    var FETCH_TYPE = DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
    var mockResult = _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_2__; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

    var url = "".concat(Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_3__["getLocationOrigin"])(), "/").concat(users, "/").concat(id);
    var method = 'get';
    var headers = {
      authorization: "Bearer ".concat(token)
    };
    var options = {
      credentials: 'same-origin'
    }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA
        },
        // mock fetch props:
        mockResult: mockResult,
        // real fetch props:
        url: url,
        method: method,
        headers: headers,
        options: options
      }
    });
  };
}

function fetchUserInfoDataIfNeeded() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch, getState) {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData(id));
    }

    return Promise.resolve();
  };
}

function shouldFetchUserInfoData(state) {
  var isFetching = state.userAuth.isFetching;

  if (isFetching) {
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/front/redux/store/configureStore.dev.js":
/*!*****************************************************!*\
  !*** ./src/front/redux/store/configureStore.dev.js ***!
  \*****************************************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _modules_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/reducers */ "./src/front/redux/modules/reducers.js");
/* harmony import */ var _middleware_fetchMiddleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middleware/fetchMiddleware */ "./src/front/redux/middleware/fetchMiddleware.js");
// #region imports

 // import { routerMiddleware } from 'react-router-redux'; // deprecated in favor of react-connected-router


 // #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';

 // #endregion



 // #endregion
// #region constants

var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()(); // #endregion
// #region createStore : enhancer
// #region logger middleware (dev only)

var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
  level: 'info',
  collapsed: true
}); // #endregion

var enhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"], Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), _middleware_fetchMiddleware__WEBPACK_IMPORTED_MODULE_7__["default"], loggerMiddleware // logger at the end
)); // #endregion

function configureStore(initialState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["connectRouter"])(history)(_modules_reducers__WEBPACK_IMPORTED_MODULE_6__["default"]), initialState, enhancer);

  if (false) {}

  return store;
}

/***/ }),

/***/ "./src/front/redux/store/configureStore.js":
/*!*************************************************!*\
  !*** ./src/front/redux/store/configureStore.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-process-env:0 */
if (false) {} else {
  module.exports = __webpack_require__(/*! ./configureStore.dev */ "./src/front/redux/store/configureStore.dev.js");
}

/***/ }),

/***/ "./src/front/routes/MainRoutes.js":
/*!****************************************!*\
  !*** ./src/front/routes/MainRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/front/routes/routes.js");
// #region imports


 // #endregion

var MainRoutes = function MainRoutes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _routes__WEBPACK_IMPORTED_MODULE_2__["Home"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/tickers",
    component: _routes__WEBPACK_IMPORTED_MODULE_2__["Ticker"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "*",
    component: _routes__WEBPACK_IMPORTED_MODULE_2__["PageNotFound"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainRoutes);

/***/ }),

/***/ "./src/front/routes/routes.js":
/*!************************************!*\
  !*** ./src/front/routes/routes.js ***!
  \************************************/
/*! exports provided: Home, Ticker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return Ticker; });
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
// #region imports
 // #endregion

var Home = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ../pages/home */ "./src/front/pages/home/index.js"));
}, {
  modules: ['../pages/home']
});
var Ticker = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../pages/tickers */ "./src/front/pages/tickers/index.js"));
}, {
  modules: ['../pages/tickers']
});

/***/ }),

/***/ "./src/front/services/API/fetchTools.js":
/*!**********************************************!*\
  !*** ./src/front/services/API/fetchTools.js ***!
  \**********************************************/
/*! exports provided: getLocationOrigin, getMethod, postMethod, defaultOptions, jsonHeader, encodeBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function() { return getLocationOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethod", function() { return getMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMethod", function() { return postMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHeader", function() { return jsonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64", function() { return encodeBase64; });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
// #region imports
 // #endregion
// #region  window.location.origin polyfill

var getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ':' + window.location.port : '');
  }

  return window.location.origin;
}; // #endregion
// #region query options:

var getMethod = {
  method: 'get'
};
var postMethod = {
  method: 'post'
};
var defaultOptions = {
  credentials: 'same-origin'
};
var jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json' // 'Access-control-Allow-Origin': '*'

  }
}; // #endregion
// #region general helpers

var encodeBase64 = function encodeBase64() {
  var stringToEncode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(stringToEncode);
}; // #endregion

/***/ }),

/***/ "./src/front/services/auth/index.js":
/*!******************************************!*\
  !*** ./src/front/services/auth/index.js ***!
  \******************************************/
/*! exports provided: auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js");
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_after__WEBPACK_IMPORTED_MODULE_1__);
// #region imports

 // #endregion
// #region constants

var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';
var APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];
var parse = JSON.parse;
var stringify = JSON.stringify; // #endregion

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */

var auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getToken: function getToken() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && localStorage.getItem(tokenKey) || null;
    } // sessionStorage:


    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && sessionStorage.getItem(tokenKey) || null;
    } // default:


    return null;
  },

  /**
   * set the token value into localstorage (managed by localforage)
   *
   * @param {string} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [tokenKey='token'] token key
   * @returns {boolean} success/failure flag
   */
  setToken: function setToken() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TOKEN_KEY;

    if (!value || value.length <= 0) {
      return;
    } // localStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
      }
    } // sessionStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
      }
    }
  },

  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to tickers routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you tickers view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
   */
  isAuthenticated: function isAuthenticated() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage && localStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    } // sessionStorage:


    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage && sessionStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    } // default:


    return false;
  },

  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken: function clearToken() {
    var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    } // sessionStorage:


    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },

  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate: function getTokenExpirationDate(encodedToken) {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    var token = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(encodedToken);

    if (!token.exp) {
      return new Date(0); // is expired
    }

    var expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },

  /**
   * tell is token is expired (compared to now)
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {bool} returns true if expired else false
   */
  isExpiredToken: function isExpiredToken(encodedToken) {
    var expirationDate = this.getTokenExpirationDate(encodedToken);
    var rightNow = new Date();
    var isExpiredToken = date_fns_is_after__WEBPACK_IMPORTED_MODULE_1___default()(rightNow, expirationDate);
    return isExpiredToken;
  },
  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////

  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getUserInfo: function getUserInfo() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_INFO;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && parse(localStorage.getItem(userInfoKey)) || null;
    } // sessionStorage:


    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && parse(sessionStorage.getItem(userInfoKey)) || null;
    } // default:


    return null;
  },

  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
  setUserInfo: function setUserInfo() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : USER_INFO;

    if (!value || value.length <= 0) {
      return;
    } // localStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
      }
    } // sessionStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },

  /**
   * delete userInfo
   *
   * @param {string} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
  clearUserInfo: function clearUserInfo() {
    var userInfoKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_INFO;

    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
    } // sessionStorage:


    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
    }
  },
  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage: function clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./src/front/services/sw/registerServiceWorker.js":
/*!********************************************************!*\
  !*** ./src/front/services/sw/registerServiceWorker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// #region  imports
 // #endregion
// #region constants

var swPath = _config_appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].sw.path; // #endregion

function registerServiceWorker() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        // $FlowIgnore
        navigator.serviceWorker.register(swPath).then(function (registration) {
          console.log('SW registered: ', registration);
        }).catch(function (registrationError) {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (registerServiceWorker);

/***/ }),

/***/ "./src/front/style/injectGlobalStyles.js":
/*!***********************************************!*\
  !*** ./src/front/style/injectGlobalStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports
 // #endregion

var injectGlobalStyle = function injectGlobalStyle() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["injectGlobal"])(_templateObject());
};

/* harmony default export */ __webpack_exports__["default"] = (injectGlobalStyle);

/***/ })

/******/ });
//# sourceMappingURL=app.2c534216322b1dc01c71.js.map