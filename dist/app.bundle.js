(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "bERx":
/*!****************************!*\
  !*** ./static/js/utils.js ***!
  \****************************/
/*! exports provided: exampleUtils, exampleUtilsDynamicImported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleUtils", function() { return exampleUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleUtilsDynamicImported", function() { return exampleUtilsDynamicImported; });
const exampleUtils = (text) => text.substring(0, 3);

const exampleUtilsDynamicImported = (text) => text.replace(/[a]/g, 'A').replace(/[b]/g, 'B');




/***/ }),

/***/ "eT28":
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/example */ "kjHT");


Object(_components_example__WEBPACK_IMPORTED_MODULE_0__["default"])();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await __webpack_require__.e(/*! import() | dynamic-imported */ "dynamic-imported").then(__webpack_require__.bind(null, /*! ./components/example/dynamic-imported */ "EEpW"));
  document.querySelector('body').innerHTML = await di();
  document.querySelector('body').append('DYNAMIC EXAMPLE WORKED!')
}


/***/ }),

/***/ "kjHT":
/*!***********************************************!*\
  !*** ./static/js/components/example/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "bERx");


const Example = async () => {
  console.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["exampleUtils"])('Example'));
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsPromise.json();
  console.log(JSON.stringify(posts));
  document.querySelector('body').innerHTML = 'Example work <blockquote>' + JSON.stringify(posts[0]) + '</blockquote>';
}

/* harmony default export */ __webpack_exports__["default"] = (Example);


/***/ })

},[["eT28","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUtFOzs7Ozs7Ozs7Ozs7O0FDUEY7QUFBQTtBQUEyQzs7QUFFM0MsbUVBQU87O0FBRVA7O0FBRUE7QUFDQSxTQUFTLGNBQWMsU0FBUyxzS0FBMEY7QUFDMUg7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUEyQzs7QUFFM0M7QUFDQSxjQUFjLDJEQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQyIsImZpbGUiOiIuLi9kaXN0L2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleGFtcGxlVXRpbHMgPSAodGV4dCkgPT4gdGV4dC5zdWJzdHJpbmcoMCwgMyk7XG5cbmNvbnN0IGV4YW1wbGVVdGlsc0R5bmFtaWNJbXBvcnRlZCA9ICh0ZXh0KSA9PiB0ZXh0LnJlcGxhY2UoL1thXS9nLCAnQScpLnJlcGxhY2UoL1tiXS9nLCAnQicpO1xuXG5leHBvcnQge1xuICBleGFtcGxlVXRpbHMsXG4gIGV4YW1wbGVVdGlsc0R5bmFtaWNJbXBvcnRlZCxcbn07XG4iLCJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9jb21wb25lbnRzL2V4YW1wbGVcIjtcblxuRXhhbXBsZSgpO1xuXG5zZXRUaW1lb3V0KCgpID0+IGdldENvbXBvbmVudCgpLCAyMDAwKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICBjb25zdCB7IGRlZmF1bHQ6IGRpIH0gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkeW5hbWljLWltcG9ydGVkXCIgKi8gJy4vY29tcG9uZW50cy9leGFtcGxlL2R5bmFtaWMtaW1wb3J0ZWQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmlubmVySFRNTCA9IGF3YWl0IGRpKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoJ0RZTkFNSUMgRVhBTVBMRSBXT1JLRUQhJylcbn1cbiIsImltcG9ydCB7IGV4YW1wbGVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuY29uc3QgRXhhbXBsZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coZXhhbXBsZVV0aWxzKCdFeGFtcGxlJykpO1xuICBjb25zdCBwb3N0c1Byb21pc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcG9zdHNQcm9taXNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocG9zdHMpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmlubmVySFRNTCA9ICdFeGFtcGxlIHdvcmsgPGJsb2NrcXVvdGU+JyArIEpTT04uc3RyaW5naWZ5KHBvc3RzWzBdKSArICc8L2Jsb2NrcXVvdGU+Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=