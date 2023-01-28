"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-top: 20px;\\r\\n  background-color: #f6f6f6;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.tasks-wrapper {\\r\\n  width: 500px;\\r\\n  min-height: auto;\\r\\n  background-color: #f6f6f6;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  padding: 0;\\r\\n  height: auto;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.todo-list li {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  list-style: none;\\r\\n  font-size: 1rem;\\r\\n  border-bottom: 1px solid #999;\\r\\n  color: #888;\\r\\n}\\r\\n\\r\\n.tasks-title {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 17px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.refresh-img {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.task-item {\\r\\n  padding: 2px 15px;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  column-gap: 10px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background-color: #f1efb4;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  padding-bottom: 15px;\\r\\n}\\r\\n\\r\\n.task-desc {\\r\\n  flex-grow: 1;\\r\\n  padding: 15px;\\r\\n  border: none !important;\\r\\n}\\r\\n\\r\\n.dots {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list li input#input-task {\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  padding: 15px;\\r\\n  border: none !important;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none !important;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  padding-top: 10px;\\r\\n  margin: auto;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTaskToDisplay.js":
/*!*********************************!*\
  !*** ./src/addTaskToDisplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToDisplay\": () => (/* binding */ addTaskToDisplay),\n/* harmony export */   \"displayAllTasks\": () => (/* binding */ displayAllTasks)\n/* harmony export */ });\n/* harmony import */ var _images_dots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/dots.png */ \"./src/images/dots.png\");\n/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/remove.png */ \"./src/images/remove.png\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _taskArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskArray.js */ \"./src/taskArray.js\");\n/* harmony import */ var _removeTaskFromDisplay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeTaskFromDisplay.js */ \"./src/removeTaskFromDisplay.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskObj = new _crud_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_taskArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nconst ul = document.querySelector('.todo-list');\r\n\r\nconst addListDescriptionListener = (taskinput) => {\r\n  taskinput.addEventListener('focus', (e) => {\r\n    e.target.parentNode.style.backgroundColor = '#f1efb4';\r\n    e.target.style.backgroundColor = '#f1efb4';\r\n    e.target.nextElementSibling.setAttribute('src', _images_remove_png__WEBPACK_IMPORTED_MODULE_1__);\r\n    e.target.classList.add('focused');\r\n    e.target.style.textDecoration = 'none';\r\n  });\r\n\r\n  taskinput.addEventListener('blur', (e) => {\r\n    e.target.parentNode.style.backgroundColor = '';\r\n    e.target.style.backgroundColor = '';\r\n    e.target.nextElementSibling.setAttribute('src', _images_dots_png__WEBPACK_IMPORTED_MODULE_0__);\r\n    e.target.classList.remove('focused');\r\n    if (e.target.previousElementSibling.checked) {\r\n      e.target.style.textDecoration = 'line-through';\r\n    }\r\n  });\r\n\r\n  taskinput.addEventListener('keyup', (e) => {\r\n    const editedText = e.target.value;\r\n    const index = e.target.getAttribute('data-index');\r\n    taskObj.editTask(index, editedText);\r\n  });\r\n\r\n  taskinput.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      if (e.target.classList.contains('focused')) {\r\n        e.target.parentNode.style.backgroundColor = '';\r\n        e.target.style.backgroundColor = '';\r\n        e.target.nextElementSibling.setAttribute('src', _images_dots_png__WEBPACK_IMPORTED_MODULE_0__);\r\n        e.target.classList.remove('focused');\r\n        if (e.target.previousElementSibling.checked) {\r\n          e.target.style.textDecoration = 'line-through';\r\n        }\r\n        document.getElementById('input-task').focus();\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\nconst addCheckboxListener = (checkbox) => {\r\n  checkbox.addEventListener('change', (e) => {\r\n    if (e.target.checked) {\r\n      const boxIndex = e.target.getAttribute('data-index');\r\n      e.target.nextElementSibling.style.textDecoration = 'line-through';\r\n      taskObj.markAsCompleted(boxIndex);\r\n    } else {\r\n      // console.log(\"its not checked\");\r\n      e.target.nextElementSibling.style.textDecoration = 'none';\r\n    }\r\n  });\r\n};\r\n\r\nconst addRemoveButtonListener = (removebtn) => {\r\n  removebtn.addEventListener('mousedown', (e) => {\r\n    e.preventDefault();\r\n    const dataIndex = e.target.getAttribute('data-index');\r\n    if (e.target.previousElementSibling.classList.contains('focused')) {\r\n      taskObj.removeTask(dataIndex);\r\n      (0,_removeTaskFromDisplay_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dataIndex);\r\n      const tasks = document.querySelectorAll('.dots');\r\n      const chkboxes = document.querySelectorAll('.checkbox');\r\n      const taskInputs = document.querySelectorAll('.task-desc');\r\n      const index = dataIndex - 1;\r\n      for (let i = index; i < taskObj.tasksArr.length; i += 1) {\r\n        tasks[i].setAttribute('data-index', i + 1);\r\n        chkboxes[i].setAttribute('data-index', i + 1);\r\n        taskInputs[i].setAttribute('data-index', i + 1);\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\nconst addTaskToDisplay = (task) => {\r\n  const li = document.createElement('li');\r\n  const checkBoxInput = document.createElement('input');\r\n  const descInput = document.createElement('input');\r\n  checkBoxInput.setAttribute('type', 'checkbox');\r\n  checkBoxInput.setAttribute('data-index', task.index);\r\n  descInput.setAttribute('type', 'text');\r\n  descInput.setAttribute('data-index', task.index);\r\n\r\n  // add image to list item\r\n  const dotImage = new Image();\r\n  dotImage.src = _images_dots_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  dotImage.classList.add('dots');\r\n  dotImage.setAttribute('data-index', task.index);\r\n  li.classList.add('task-item');\r\n  checkBoxInput.classList.add('checkbox');\r\n  descInput.classList.add('task-desc');\r\n  descInput.setAttribute('value', task.description);\r\n\r\n  li.appendChild(checkBoxInput);\r\n  li.appendChild(descInput);\r\n  li.appendChild(dotImage);\r\n  ul.appendChild(li);\r\n\r\n  if (task.completed) {\r\n    checkBoxInput.checked = 'checked';\r\n    descInput.style.textDecoration = 'line-through';\r\n  }\r\n\r\n  addListDescriptionListener(descInput);\r\n  addCheckboxListener(checkBoxInput);\r\n  addRemoveButtonListener(dotImage);\r\n};\r\n\r\nconst displayAllTasks = (tasksArr) => {\r\n  tasksArr.forEach((task) => {\r\n    addTaskToDisplay(task);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/addTaskToDisplay.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-class.js */ \"./src/task-class.js\");\n\r\n\r\nclass TasksOperations {\r\n  constructor(tasksArr) {\r\n    this.tasksArr = tasksArr;\r\n  }\r\n\r\n  addTask = (taskDesc) => {\r\n    const newTask = new _task_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getLastIndex() + 1, taskDesc);\r\n    this.tasksArr.push(newTask);\r\n    this.updateLocalStorage();\r\n  }\r\n\r\n removeTask = (taskIndex) => {\r\n   const index = taskIndex - 1;\r\n   this.tasksArr.splice(index, 1); // Remove task from task array by using index\r\n   for (let i = index; i < this.tasksArr.length; i += 1) {\r\n     this.tasksArr[i].index = i + 1;\r\n   }\r\n   this.updateLocalStorage();\r\n }\r\n\r\n editTask = (index, editedText) => {\r\n   this.tasksArr[index - 1].description = editedText;\r\n   this.updateLocalStorage();\r\n }\r\n\r\n markAsCompleted = (index) => {\r\n   const trueIndex = index - 1;\r\n   this.tasksArr[trueIndex].completed = true;\r\n   this.updateLocalStorage();\r\n }\r\n\r\n getLastIndex = () => this.tasksArr.length\r\n\r\n updateLocalStorage = () => {\r\n   localStorage.setItem('tasks', JSON.stringify(this.tasksArr));\r\n }\r\n\r\n updateTasks = (newTasksArr) => {\r\n   this.tasksArr = newTasksArr;\r\n }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksOperations);\n\n//# sourceURL=webpack://to-do-list/./src/crud.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray.js */ \"./src/taskArray.js\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _addTaskToDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskToDisplay.js */ \"./src/addTaskToDisplay.js\");\n/* harmony import */ var _images_refresh_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/refresh.png */ \"./src/images/refresh.png\");\n\r\n\r\n\r\n\r\n// import removeTaskFromDisplay from './removeTaskFromDisplay.js';\r\n\r\n\r\nconst taskDescriptionInput = document.getElementById('input-task');\r\nconst clearAll = document.querySelector('.clear-all');\r\nconst refreshImg = document.querySelector('.refresh-img');\r\nrefreshImg.setAttribute('src', _images_refresh_png__WEBPACK_IMPORTED_MODULE_4__);\r\nconst taskObj = new _crud_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_taskArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\nif (_taskArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length > 0) {\r\n  (0,_addTaskToDisplay_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)(_taskArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n}\r\n\r\ntaskDescriptionInput.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    taskObj.addTask(e.target.value);\r\n    (0,_addTaskToDisplay_js__WEBPACK_IMPORTED_MODULE_3__.addTaskToDisplay)(_taskArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_taskArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length - 1]);\r\n    e.target.value = '';\r\n  }\r\n});\r\n\r\nclearAll.addEventListener('click', () => {\r\n  const uncompleted = _taskArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((task) => !task.completed);\r\n  uncompleted.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n  taskObj.tasksArr = uncompleted;\r\n  taskObj.updateLocalStorage();\r\n  window.location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/removeTaskFromDisplay.js":
/*!**************************************!*\
  !*** ./src/removeTaskFromDisplay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTaskFromDisplay = (indexNum) => {\n  const ul = document.querySelector('.todo-list');\n  const li = document.querySelectorAll('.task-item');\n  indexNum -= 1;\n  li.forEach((taskItem, index) => {\n    if (parseInt(index, 10) === parseInt(indexNum, 10)) {\n      ul.removeChild(taskItem);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskFromDisplay);\n\n//# sourceURL=webpack://to-do-list/./src/removeTaskFromDisplay.js?");

/***/ }),

/***/ "./src/task-class.js":
/*!***************************!*\
  !*** ./src/task-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(index, desc, completed = false) {\n    this.index = index;\n    this.description = desc;\n    this.completed = completed;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/task-class.js?");

/***/ }),

/***/ "./src/taskArray.js":
/*!**************************!*\
  !*** ./src/taskArray.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst allTasks = JSON.parse(localStorage.getItem('tasks')) || [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTasks);\n\n//# sourceURL=webpack://to-do-list/./src/taskArray.js?");

/***/ }),

/***/ "./src/images/dots.png":
/*!*****************************!*\
  !*** ./src/images/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/images/dots..png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/dots.png?");

/***/ }),

/***/ "./src/images/refresh.png":
/*!********************************!*\
  !*** ./src/images/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/images/refresh..png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/refresh.png?");

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/images/remove..png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/remove.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);