var __CML__GLOBAL = require("../../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([18],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/foot/foot.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../../../node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/foot/foot.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CFoot = function CFoot() {
  _classCallCheck(this, CFoot);

  this.props = {
    footStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'height:80cpx;'
  };
  this.computed = {
    mergeFootStyle: function mergeFootStyle() {
      return this.defaultStyle + this.footStyle;
    }
  };
};

exports.default = new CFoot();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/layout/foot/foot.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/foot/foot.cml");
var __cml__script = __webpack_require__("../../../node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/foot/foot.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/layout/foot/foot.cml"]);