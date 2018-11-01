(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/front/components/TickerList/index.js":
/*!**************************************************!*\
  !*** ./src/front/components/TickerList/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/front/components/TickerList/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TickerListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TickerListItem */ "./src/front/components/TickerListItem/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var TickerList =
/*#__PURE__*/
function (_Component) {
  _inherits(TickerList, _Component);

  function TickerList(props) {
    var _this;

    _classCallCheck(this, TickerList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TickerList).call(this, props));
    _this.state = {
      tickers: []
    };
    return _this;
  }

  _createClass(TickerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://indexurl.herokuapp.com/api/v1/tickers").then(function (res) {
        var tickers = [];
        Object.keys(res.data).map(function (el) {
          tickers.push(res.data[el]);
        });

        _this2.setState({
          tickers: tickers
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "ticker-list"
      }, this.state.tickers.map(function (ticker) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: ticker.id,
          className: "ticker-list-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TickerListItem__WEBPACK_IMPORTED_MODULE_2__["default"], ticker));
      }));
    }
  }]);

  return TickerList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TickerList);

/***/ }),

/***/ "./src/front/components/TickerListItem/index.js":
/*!******************************************************!*\
  !*** ./src/front/components/TickerListItem/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/Card */ "./node_modules/material-ui/Card/index.js");
/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");




var CardTicker = function CardTicker(_ref) {
  var id = _ref.id,
      rank = _ref.rank,
      website_slug = _ref.website_slug,
      name = _ref.name,
      symbol = _ref.symbol,
      quotes = _ref.quotes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "ticker-list-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    style: {
      width: '100%',
      height: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#eee'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://s2.coinmarketcap.com/static/img/coins/64x64/".concat(id, ".png"),
    alt: "".concat(name, " ").concat(symbol)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    title: "".concat(name),
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ticker-span"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    className: "ticker-label"
  }, "S\xEDmbolo:"), " ", symbol, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ticker-span"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    className: "ticker-label"
  }, "Rank:"), " ", rank, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ticker-span"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    className: "ticker-label"
  }, "Slug:"), " ", website_slug, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    title: "Quotes",
    style: {
      display: 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ticker-span"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    className: "ticker-label"
  }, "Price:"), " ", quotes["USD"]["price"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ticker-span"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    className: "ticker-label"
  }, "Vol. 24h:"), " ", quotes["USD"]["volume_24h"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardTicker);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/index.js":
/*!***************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withEnterAnimation */ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js");

/* harmony default export */ __webpack_exports__["default"] = (_withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      opacity: 0;\n      animation-name: ", ";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @region imports
 // #endregion

var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (_ref) {
  var viewEnter = _ref.viewEnter;
  return viewEnter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), fadeIn);
});
/* harmony default export */ __webpack_exports__["default"] = (AnimatedDiv);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/withEnterAnimation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/AnimatedDiv */ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
function withEnterAnimation() {
  return function (BaseComponent) {
    var WithEnterAnimation =
    /*#__PURE__*/
    function (_Component) {
      _inherits(WithEnterAnimation, _Component);

      function WithEnterAnimation() {
        _classCallCheck(this, WithEnterAnimation);

        return _possibleConstructorReturn(this, _getPrototypeOf(WithEnterAnimation).apply(this, arguments));
      }

      _createClass(WithEnterAnimation, [{
        key: "render",
        value: function render() {
          var passProps = _extends({}, this.props);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
            viewEnter: true
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps));
        }
      }]);

      return WithEnterAnimation;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithEnterAnimation.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withEnterAnimation');
    }
    /* eslint-enable no-process-env */


    return WithEnterAnimation;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withEnterAnimation);

/***/ }),

/***/ "./src/front/pages/tickers/Ticker.js":
/*!*******************************************!*\
  !*** ./src/front/pages/tickers/Ticker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TickerList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TickerList */ "./src/front/components/TickerList/index.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2__);
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
var Ticker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Ticker, _PureComponent);

  function Ticker() {
    _classCallCheck(this, Ticker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ticker).apply(this, arguments));
  }

  _createClass(Ticker, [{
    key: "render",
    // #region lifecycle
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cota\xE7\xF5es"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CoinMarketCap"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TickerList__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    } // #endregion

  }]);

  return Ticker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Ticker);

/***/ }),

/***/ "./src/front/pages/tickers/index.js":
/*!******************************************!*\
  !*** ./src/front/pages/tickers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ticker */ "./src/front/pages/tickers/Ticker.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
// #region imports


 // #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])())(_Ticker__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=1.2c534216322b1dc01c71.js.map