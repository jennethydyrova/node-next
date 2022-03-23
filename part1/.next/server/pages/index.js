"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst API = \"https://localhost:3443/api\";\nfunction Home() {\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    const fetchData = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(API);\n            setData(res.data);\n            return res.data;\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: data\n        }, void 0, false, {\n            fileName: \"/Users/dzennetahydyrova/Development/node-next/part1/pages/index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dzennetahydyrova/Development/node-next/part1/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNBO0FBRXpCLEtBQUssQ0FBQ0UsR0FBRyxHQUFHLENBQTRCO0FBRXpCLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDOUIsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sSUFBSUoscURBQWMsQ0FBQyxJQUFJO0lBRTNDLEtBQUssQ0FBQ00sU0FBUyxhQUFlLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNSLGdEQUFTLENBQUNFLEdBQUc7WUFDL0JHLE9BQU8sQ0FBQ0csR0FBRyxDQUFDSixJQUFJO1lBQ2hCLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDSixJQUFJO1FBQ2pCLENBQUMsQ0FBQyxLQUFLLEVBQUVNLENBQUMsRUFBRSxDQUFDO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRFQsc0RBQWUsS0FBTyxDQUFDO1FBQ3JCTSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hPLENBQUc7OEZBQ0RDLENBQUU7c0JBQUVYLElBQUk7Ozs7Ozs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLXdvcmxkLW5leHQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQVBJID0gXCJodHRwczovL2xvY2FsaG9zdDozNDQzL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChBUEkpO1xuICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XG4gICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2RhdGF9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwiQVBJIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJyZXMiLCJnZXQiLCJlIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();