(self["webpackChunkwebpack_boilerplate_sk"] = self["webpackChunkwebpack_boilerplate_sk"] || []).push([["dynamic-imported"],{

/***/ 594:
/*!**********************************************************!*\
  !*** ./static/js/components/example/dynamic-imported.js ***!
  \**********************************************************/
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


const ExampleDi = async () => {
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsPromise.json();
  return 'ExampleDi work <blockquote>' + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.exampleUtilsDynamicImported)(JSON.stringify(posts[0])) + '</blockquote>';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleDi);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLXNrLy4vc3RhdGljL2pzL2NvbXBvbmVudHMvZXhhbXBsZS9keW5hbWljLWltcG9ydGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG1FQUEyQjtBQUNwRTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJmaWxlIjoiLi4vZGlzdC9keW5hbWljLWltcG9ydGVkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4YW1wbGVVdGlsc0R5bmFtaWNJbXBvcnRlZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuY29uc3QgRXhhbXBsZURpID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0c1Byb21pc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcG9zdHNQcm9taXNlLmpzb24oKTtcbiAgcmV0dXJuICdFeGFtcGxlRGkgd29yayA8YmxvY2txdW90ZT4nICsgZXhhbXBsZVV0aWxzRHluYW1pY0ltcG9ydGVkKEpTT04uc3RyaW5naWZ5KHBvc3RzWzBdKSkgKyAnPC9ibG9ja3F1b3RlPic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVEaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=