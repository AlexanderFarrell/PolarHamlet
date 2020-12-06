/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_Client/_Code/PolarHamlet.js":
/*!**************************************!*\
  !*** ./_Client/_Code/PolarHamlet.js ***!
  \**************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_GameStateFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Game/GameStateFlow */ \"./_Client/_Code/_Game/GameStateFlow.js\");\n\n\nvar _require = __webpack_require__(/*! ./_Game/GameBuilder */ \"./_Client/_Code/_Game/GameBuilder.js\"),\n    GameBuilder = _require.GameBuilder;\n\nGameBuilder.CreateGame();\n_Game_GameStateFlow__WEBPACK_IMPORTED_MODULE_0__.GameStateFlow.ToLoginCreateAccountPage();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/PolarHamlet.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginModel.js":
/*!***************************************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginModel.js ***!
  \***************************************************************************/
/*! namespace exports */
/*! export CreateLoginModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateLoginModel\": () => /* binding */ CreateLoginModel\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateModel */ \"./_Client/_Code/_Engine/_Screen/AppStateModel.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar CreateLoginModel = /*#__PURE__*/function (_AppStateModel) {\n  _inherits(CreateLoginModel, _AppStateModel);\n\n  var _super = _createSuper(CreateLoginModel);\n\n  function CreateLoginModel() {\n    _classCallCheck(this, CreateLoginModel);\n\n    return _super.call(this);\n  }\n\n  return CreateLoginModel;\n}(_Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__.AppStateModel);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginModel.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginView.js":
/*!**************************************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginView.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export CreateLoginView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateLoginView\": () => /* binding */ CreateLoginView\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateView */ \"./_Client/_Code/_Engine/_Screen/AppStateView.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar CreateLoginView = /*#__PURE__*/function (_AppStateView) {\n  _inherits(CreateLoginView, _AppStateView);\n\n  var _super = _createSuper(CreateLoginView);\n\n  function CreateLoginView() {\n    _classCallCheck(this, CreateLoginView);\n\n    return _super.call(this);\n  }\n\n  return CreateLoginView;\n}(_Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__.AppStateView);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginView.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_Load/LoadModel.js":
/*!******************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_Load/LoadModel.js ***!
  \******************************************************/
/*! namespace exports */
/*! export LoadModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadModel\": () => /* binding */ LoadModel\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateModel */ \"./_Client/_Code/_Engine/_Screen/AppStateModel.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar LoadModel = /*#__PURE__*/function (_AppStateModel) {\n  _inherits(LoadModel, _AppStateModel);\n\n  var _super = _createSuper(LoadModel);\n\n  function LoadModel(appState) {\n    var _this;\n\n    _classCallCheck(this, LoadModel);\n\n    _this = _super.call(this);\n    _this.AppStateToLoad = appState;\n    return _this;\n  }\n\n  return LoadModel;\n}(_Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__.AppStateModel);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_Load/LoadModel.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_Load/LoadView.js":
/*!*****************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_Load/LoadView.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export LoadView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadView\": () => /* binding */ LoadView\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateView */ \"./_Client/_Code/_Engine/_Screen/AppStateView.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar LoadView = /*#__PURE__*/function (_AppStateView) {\n  _inherits(LoadView, _AppStateView);\n\n  var _super = _createSuper(LoadView);\n\n  function LoadView() {\n    _classCallCheck(this, LoadView);\n\n    return _super.call(this);\n  }\n\n  return LoadView;\n}(_Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__.AppStateView);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_Load/LoadView.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_Menu/MenuModel.js":
/*!******************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_Menu/MenuModel.js ***!
  \******************************************************/
/*! namespace exports */
/*! export MenuModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuModel\": () => /* binding */ MenuModel\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateModel */ \"./_Client/_Code/_Engine/_Screen/AppStateModel.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar MenuModel = /*#__PURE__*/function (_AppStateModel) {\n  _inherits(MenuModel, _AppStateModel);\n\n  var _super = _createSuper(MenuModel);\n\n  function MenuModel() {\n    _classCallCheck(this, MenuModel);\n\n    return _super.call(this);\n  }\n\n  return MenuModel;\n}(_Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__.AppStateModel);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_Menu/MenuModel.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_Menu/MenuView.js":
/*!*****************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_Menu/MenuView.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export MenuView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuView\": () => /* binding */ MenuView\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateView */ \"./_Client/_Code/_Engine/_Screen/AppStateView.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar MenuView = /*#__PURE__*/function (_AppStateView) {\n  _inherits(MenuView, _AppStateView);\n\n  var _super = _createSuper(MenuView);\n\n  function MenuView() {\n    _classCallCheck(this, MenuView);\n\n    return _super.call(this);\n  }\n\n  return MenuView;\n}(_Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__.AppStateView);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_Menu/MenuView.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_Play/PlayModel.js":
/*!******************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_Play/PlayModel.js ***!
  \******************************************************/
/*! namespace exports */
/*! export PlayModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayModel\": () => /* binding */ PlayModel\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateModel */ \"./_Client/_Code/_Engine/_Screen/AppStateModel.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar PlayModel = /*#__PURE__*/function (_AppStateModel) {\n  _inherits(PlayModel, _AppStateModel);\n\n  var _super = _createSuper(PlayModel);\n\n  function PlayModel() {\n    _classCallCheck(this, PlayModel);\n\n    return _super.call(this);\n  }\n\n  return PlayModel;\n}(_Engine_Screen_AppStateModel__WEBPACK_IMPORTED_MODULE_0__.AppStateModel);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_Play/PlayModel.js?");

/***/ }),

/***/ "./_Client/_Code/_AppScreens/_Play/PlayView.js":
/*!*****************************************************!*\
  !*** ./_Client/_Code/_AppScreens/_Play/PlayView.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export PlayView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayView\": () => /* binding */ PlayView\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_Engine/_Screen/AppStateView */ \"./_Client/_Code/_Engine/_Screen/AppStateView.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar PlayView = /*#__PURE__*/function (_AppStateView) {\n  _inherits(PlayView, _AppStateView);\n\n  var _super = _createSuper(PlayView);\n\n  function PlayView() {\n    _classCallCheck(this, PlayView);\n\n    return _super.call(this);\n  }\n\n  return PlayView;\n}(_Engine_Screen_AppStateView__WEBPACK_IMPORTED_MODULE_0__.AppStateView);\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_AppScreens/_Play/PlayView.js?");

/***/ }),

/***/ "./_Client/_Code/_Engine/_Exceptions/ParameterError.js":
/*!*************************************************************!*\
  !*** ./_Client/_Code/_Engine/_Exceptions/ParameterError.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export ParameterError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParameterError\": () => /* binding */ ParameterError\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar ParameterError = /*#__PURE__*/function (_Error) {\n  _inherits(ParameterError, _Error);\n\n  var _super = _createSuper(ParameterError);\n\n  function ParameterError(methodName, parameterName, expectedType, passedValue) {\n    _classCallCheck(this, ParameterError);\n\n    return _super.call(this, \"ParameterError: Incorrect type passed to method. Method: \" + methodName + \", Parameter Variable Name: \" + parameterName + \", Expected Type: \" + expectedType + \", Passed Type: \" + _typeof(passedValue));\n  }\n\n  return ParameterError;\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Engine/_Exceptions/ParameterError.js?");

/***/ }),

/***/ "./_Client/_Code/_Engine/_Screen/AppController.js":
/*!********************************************************!*\
  !*** ./_Client/_Code/_Engine/_Screen/AppController.js ***!
  \********************************************************/
/*! namespace exports */
/*! export AppController [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppController\": () => /* binding */ AppController\n/* harmony export */ });\n/* harmony import */ var _Exceptions_ParameterError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Exceptions/ParameterError */ \"./_Client/_Code/_Engine/_Exceptions/ParameterError.js\");\n/* harmony import */ var _AppState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppState */ \"./_Client/_Code/_Engine/_Screen/AppState.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AppController = /*#__PURE__*/function () {\n  function AppController() {\n    _classCallCheck(this, AppController);\n\n    this.Active = null;\n    this.Next = null;\n    this.IsTransitioning = false;\n  }\n\n  _createClass(AppController, [{\n    key: \"SwitchToState\",\n    value: function SwitchToState(state) {\n      var _this = this;\n\n      if (state instanceof _AppState__WEBPACK_IMPORTED_MODULE_1__.AppState) {\n        this.Next = state;\n        this.IsTransitioning = true;\n        this.Next.Load(function (error) {\n          _this.IsTransitioning = false;\n          throw error;\n        }, function () {\n          var _this$Active;\n\n          _this.IsTransitioning = false;\n          (_this$Active = _this.Active) === null || _this$Active === void 0 ? void 0 : _this$Active.End();\n          _this.Active = _this.Next;\n\n          _this.Active.Begin();\n        });\n      } else {\n        throw new _Exceptions_ParameterError__WEBPACK_IMPORTED_MODULE_0__.ParameterError(\"SwitchToString\", 'screen', 'AppScreen', state);\n      }\n    }\n  }]);\n\n  return AppController;\n}();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Engine/_Screen/AppController.js?");

/***/ }),

/***/ "./_Client/_Code/_Engine/_Screen/AppState.js":
/*!***************************************************!*\
  !*** ./_Client/_Code/_Engine/_Screen/AppState.js ***!
  \***************************************************/
/*! namespace exports */
/*! export AppState [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppState\": () => /* binding */ AppState\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AppState = /*#__PURE__*/function () {\n  function AppState(model, view) {\n    _classCallCheck(this, AppState);\n\n    this.Model = model;\n    this.View = view;\n  }\n\n  _createClass(AppState, [{\n    key: \"Load\",\n    value: function Load(error, callback) {\n      var _this = this;\n\n      this.Model.Load(OnError, function () {\n        _this.View.Load(OnError, function () {\n          callback();\n        });\n      });\n\n      function OnError(err) {\n        error(err);\n      }\n    }\n  }, {\n    key: \"Begin\",\n    value: function Begin() {}\n  }, {\n    key: \"End\",\n    value: function End() {}\n  }]);\n\n  return AppState;\n}();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Engine/_Screen/AppState.js?");

/***/ }),

/***/ "./_Client/_Code/_Engine/_Screen/AppStateModel.js":
/*!********************************************************!*\
  !*** ./_Client/_Code/_Engine/_Screen/AppStateModel.js ***!
  \********************************************************/
/*! namespace exports */
/*! export AppStateModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppStateModel\": () => /* binding */ AppStateModel\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AppStateModel = /*#__PURE__*/function () {\n  function AppStateModel() {\n    _classCallCheck(this, AppStateModel);\n  }\n\n  _createClass(AppStateModel, [{\n    key: \"Load\",\n    value: function Load(error, callback) {\n      callback();\n    }\n  }]);\n\n  return AppStateModel;\n}();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Engine/_Screen/AppStateModel.js?");

/***/ }),

/***/ "./_Client/_Code/_Engine/_Screen/AppStateView.js":
/*!*******************************************************!*\
  !*** ./_Client/_Code/_Engine/_Screen/AppStateView.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export AppStateView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppStateView\": () => /* binding */ AppStateView\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _require = __webpack_require__(/*! ../_Exceptions/ParameterError */ \"./_Client/_Code/_Engine/_Exceptions/ParameterError.js\"),\n    ParameterError = _require.ParameterError;\n\nvar AppStateView = /*#__PURE__*/function () {\n  function AppStateView() {\n    _classCallCheck(this, AppStateView);\n\n    this._gameViews = [];\n    this.isActiveScreen = false;\n  }\n\n  _createClass(AppStateView, [{\n    key: \"Load\",\n    value: function Load(error, callback) {\n      callback();\n    }\n    /*addGameView(gameView){\r\n        if (gameView instanceof GameView){\r\n            this._gameViews.push(gameView);\r\n            if ((!gameView.isAdded) && (this.isActiveScreen)){\r\n                //gameView.addToHtml();\r\n            }\r\n            } else {\r\n            throw new ParameterError(this.addGameView.name, 'gameView', GameView.name, gameView);\r\n        }\r\n    }\r\n      removeGameView(gameView){\r\n        const i = this.elements.indexOf(gameView);\r\n        if (gameView.isAdded){\r\n            gameView.removeFromHtml();\r\n        }\r\n        if (i > -1){\r\n            this.elements.splice(i, 1);\r\n        }\r\n    }\r\n      Load(error, callback){\r\n        callback();\r\n    }*/\n\n  }, {\n    key: \"onActivate\",\n    value: function onActivate() {\n      this._gameViews.forEach(function (gameView) {//gameView.addToHtml();\n      });\n    }\n  }, {\n    key: \"onDeactivate\",\n    value: function onDeactivate() {\n      this._gameViews.forEach(function (gameView) {//gameView.removeFromHtml();\n      });\n    }\n  }]);\n\n  return AppStateView;\n}();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Engine/_Screen/AppStateView.js?");

/***/ }),

/***/ "./_Client/_Code/_Game/Game.js":
/*!*************************************!*\
  !*** ./_Client/_Code/_Game/Game.js ***!
  \*************************************/
/*! namespace exports */
/*! export Game [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => /* binding */ Game\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Game/Game.js?");

/***/ }),

/***/ "./_Client/_Code/_Game/GameBuilder.js":
/*!********************************************!*\
  !*** ./_Client/_Code/_Game/GameBuilder.js ***!
  \********************************************/
/*! namespace exports */
/*! export GameBuilder [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBuilder\": () => /* binding */ GameBuilder\n/* harmony export */ });\n/* harmony import */ var _Engine_Screen_AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Engine/_Screen/AppController */ \"./_Client/_Code/_Engine/_Screen/AppController.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar _require = __webpack_require__(/*! ./Game */ \"./_Client/_Code/_Game/Game.js\"),\n    Game = _require.Game;\n\nvar GameBuilder = /*#__PURE__*/function () {\n  function GameBuilder() {\n    _classCallCheck(this, GameBuilder);\n  }\n\n  _createClass(GameBuilder, null, [{\n    key: \"CreateGame\",\n    value: function CreateGame() {\n      Game.AppController = new _Engine_Screen_AppController__WEBPACK_IMPORTED_MODULE_0__.AppController();\n    }\n  }, {\n    key: \"DestroyGame\",\n    value: function DestroyGame() {\n      Game.AppController = null;\n    }\n  }]);\n\n  return GameBuilder;\n}();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Game/GameBuilder.js?");

/***/ }),

/***/ "./_Client/_Code/_Game/GameStateFlow.js":
/*!**********************************************!*\
  !*** ./_Client/_Code/_Game/GameStateFlow.js ***!
  \**********************************************/
/*! namespace exports */
/*! export GameStateFlow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameStateFlow\": () => /* binding */ GameStateFlow\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./_Client/_Code/_Game/Game.js\");\n/* harmony import */ var _Engine_Screen_AppState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Engine/_Screen/AppState */ \"./_Client/_Code/_Engine/_Screen/AppState.js\");\n/* harmony import */ var _AppScreens_Menu_MenuModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_AppScreens/_Menu/MenuModel */ \"./_Client/_Code/_AppScreens/_Menu/MenuModel.js\");\n/* harmony import */ var _AppScreens_Menu_MenuView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_AppScreens/_Menu/MenuView */ \"./_Client/_Code/_AppScreens/_Menu/MenuView.js\");\n/* harmony import */ var _AppScreens_CreateLoginAccount_CreateLoginModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_AppScreens/_CreateLoginAccount/CreateLoginModel */ \"./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginModel.js\");\n/* harmony import */ var _AppScreens_CreateLoginAccount_CreateLoginView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_AppScreens/_CreateLoginAccount/CreateLoginView */ \"./_Client/_Code/_AppScreens/_CreateLoginAccount/CreateLoginView.js\");\n/* harmony import */ var _AppScreens_Play_PlayModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_AppScreens/_Play/PlayModel */ \"./_Client/_Code/_AppScreens/_Play/PlayModel.js\");\n/* harmony import */ var _AppScreens_Play_PlayView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_AppScreens/_Play/PlayView */ \"./_Client/_Code/_AppScreens/_Play/PlayView.js\");\n/* harmony import */ var _AppScreens_Load_LoadModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_AppScreens/_Load/LoadModel */ \"./_Client/_Code/_AppScreens/_Load/LoadModel.js\");\n/* harmony import */ var _AppScreens_Load_LoadView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_AppScreens/_Load/LoadView */ \"./_Client/_Code/_AppScreens/_Load/LoadView.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\nvar GameStateFlow = /*#__PURE__*/function () {\n  function GameStateFlow() {\n    _classCallCheck(this, GameStateFlow);\n  }\n\n  _createClass(GameStateFlow, null, [{\n    key: \"ToLoginCreateAccountPage\",\n    value: function ToLoginCreateAccountPage() {\n      var model = new _AppScreens_CreateLoginAccount_CreateLoginModel__WEBPACK_IMPORTED_MODULE_4__.CreateLoginModel();\n      var view = new _AppScreens_CreateLoginAccount_CreateLoginView__WEBPACK_IMPORTED_MODULE_5__.CreateLoginView();\n      _Game__WEBPACK_IMPORTED_MODULE_0__.Game.AppController.SwitchToState(new _Engine_Screen_AppState__WEBPACK_IMPORTED_MODULE_1__.AppState(model, view));\n    }\n  }, {\n    key: \"ToMenu\",\n    value: function ToMenu() {\n      var model = new _AppScreens_Menu_MenuModel__WEBPACK_IMPORTED_MODULE_2__.MenuModel();\n      var view = new _AppScreens_Menu_MenuView__WEBPACK_IMPORTED_MODULE_3__.MenuView();\n      _Game__WEBPACK_IMPORTED_MODULE_0__.Game.AppController.SwitchToState(new _Engine_Screen_AppState__WEBPACK_IMPORTED_MODULE_1__.AppState(model, view));\n    }\n  }, {\n    key: \"LoadState\",\n    value: function LoadState(AppState) {\n      var model = new _AppScreens_Load_LoadModel__WEBPACK_IMPORTED_MODULE_8__.LoadModel();\n      var view = new _AppScreens_Load_LoadView__WEBPACK_IMPORTED_MODULE_9__.LoadView();\n      _Game__WEBPACK_IMPORTED_MODULE_0__.Game.AppController.SwitchToState(new AppState(model, view));\n    }\n  }, {\n    key: \"ToGame\",\n    value: function ToGame() {\n      var model = new _AppScreens_Play_PlayModel__WEBPACK_IMPORTED_MODULE_6__.PlayModel();\n      var view = new _AppScreens_Play_PlayView__WEBPACK_IMPORTED_MODULE_7__.PlayView();\n      var appState = new _Engine_Screen_AppState__WEBPACK_IMPORTED_MODULE_1__.AppState(model, view);\n      this.LoadState(appState);\n    }\n  }]);\n\n  return GameStateFlow;\n}();\n\n//# sourceURL=webpack://balearnthree/./_Client/_Code/_Game/GameStateFlow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./_Client/_Code/PolarHamlet.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;