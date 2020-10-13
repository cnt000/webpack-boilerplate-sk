(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamic-imported"],{

/***/ "EEpW":
/*!**********************************************************!*\
  !*** ./static/js/components/example/dynamic-imported.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "bERx");


const ExampleDi = async () => {
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsPromise.json();
  return 'ExampleDi work <blockquote>' + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["exampleUtilsDynamicImported"])(JSON.stringify(posts[0])) + '</blockquote>';
}

/* harmony default export */ __webpack_exports__["default"] = (ExampleDi);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy9leGFtcGxlL2R5bmFtaWMtaW1wb3J0ZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywwRUFBMkI7QUFDcEU7O0FBRWUsd0VBQVMsRUFBQyIsImZpbGUiOiIuLi9kaXN0L2R5bmFtaWMtaW1wb3J0ZWQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhhbXBsZVV0aWxzRHluYW1pY0ltcG9ydGVkIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBFeGFtcGxlRGkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzUHJvbWlzZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBwb3N0c1Byb21pc2UuanNvbigpO1xuICByZXR1cm4gJ0V4YW1wbGVEaSB3b3JrIDxibG9ja3F1b3RlPicgKyBleGFtcGxlVXRpbHNEeW5hbWljSW1wb3J0ZWQoSlNPTi5zdHJpbmdpZnkocG9zdHNbMF0pKSArICc8L2Jsb2NrcXVvdGU+Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZURpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==