(self["webpackChunkwebpack_boilerplate_sk"] = self["webpackChunkwebpack_boilerplate_sk"] || []).push([["app"],{

/***/ 783:
/*!***********************************************!*\
  !*** ./static/js/components/example/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ 201);


const Example = async () => {
  console.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__.exampleUtils)('Example'));
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsPromise.json();
  console.log(JSON.stringify(posts));
  document.querySelector('body').innerHTML = 'Example work <blockquote>' + JSON.stringify(posts[0]) + '</blockquote>';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);


/***/ }),

/***/ 630:
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/example */ 783);


(0,_components_example__WEBPACK_IMPORTED_MODULE_0__.default)();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await __webpack_require__.e(/*! import() | dynamic-imported */ "dynamic-imported").then(__webpack_require__.bind(__webpack_require__, /*! ./components/example/dynamic-imported */ 594));
  document.querySelector('body').innerHTML = await di();
  document.querySelector('body').append('DYNAMIC EXAMPLE WORKED!')
}


/***/ }),

/***/ 201:
/*!****************************!*\
  !*** ./static/js/utils.js ***!
  \****************************/
/*! namespace exports */
/*! export exampleUtils [provided] [no usage info] [missing usage info prevents renaming] */
/*! export exampleUtilsDynamicImported [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exampleUtils": () => /* binding */ exampleUtils,
/* harmony export */   "exampleUtilsDynamicImported": () => /* binding */ exampleUtilsDynamicImported
/* harmony export */ });
const exampleUtils = (text) => text.substring(0, 3);

const exampleUtilsDynamicImported = (text) => text.replace(/[a]/g, 'A').replace(/[b]/g, 'B');




/***/ })

},
0,[[630,"runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLXNrLy4vc3RhdGljL2pzL2NvbXBvbmVudHMvZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLXNrLy4vc3RhdGljL2pzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUtc2svLi9zdGF0aWMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDOztBQUUzQztBQUNBLGNBQWMsb0RBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVm9COztBQUUzQyw0REFBTzs7QUFFUDs7QUFFQTtBQUNBLFNBQVMsY0FBYyxTQUFTLGtMQUEwRjtBQUMxSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFLRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhhbXBsZVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBFeGFtcGxlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhleGFtcGxlVXRpbHMoJ0V4YW1wbGUnKSk7XG4gIGNvbnN0IHBvc3RzUHJvbWlzZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBwb3N0c1Byb21pc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwb3N0cykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5uZXJIVE1MID0gJ0V4YW1wbGUgd29yayA8YmxvY2txdW90ZT4nICsgSlNPTi5zdHJpbmdpZnkocG9zdHNbMF0pICsgJzwvYmxvY2txdW90ZT4nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIiwiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vY29tcG9uZW50cy9leGFtcGxlXCI7XG5cbkV4YW1wbGUoKTtcblxuc2V0VGltZW91dCgoKSA9PiBnZXRDb21wb25lbnQoKSwgMjAwMCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbiAgY29uc3QgeyBkZWZhdWx0OiBkaSB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZHluYW1pYy1pbXBvcnRlZFwiICovICcuL2NvbXBvbmVudHMvZXhhbXBsZS9keW5hbWljLWltcG9ydGVkJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbm5lckhUTUwgPSBhd2FpdCBkaSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKCdEWU5BTUlDIEVYQU1QTEUgV09SS0VEIScpXG59XG4iLCJjb25zdCBleGFtcGxlVXRpbHMgPSAodGV4dCkgPT4gdGV4dC5zdWJzdHJpbmcoMCwgMyk7XG5cbmNvbnN0IGV4YW1wbGVVdGlsc0R5bmFtaWNJbXBvcnRlZCA9ICh0ZXh0KSA9PiB0ZXh0LnJlcGxhY2UoL1thXS9nLCAnQScpLnJlcGxhY2UoL1tiXS9nLCAnQicpO1xuXG5leHBvcnQge1xuICBleGFtcGxlVXRpbHMsXG4gIGV4YW1wbGVVdGlsc0R5bmFtaWNJbXBvcnRlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9