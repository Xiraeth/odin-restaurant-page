/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/*

<!-- 
<div class="header">
  <h1>The Darkling's Appetite</h1>
  <div class="header-links">
    <div class="home">Home</div>
    <div class="Menu">Menu</div>
    <div class="contact">Contact</div>
  </div>
</div>

<div class="main">
  <img src="" alt="" />
  <h2>The best ice cream in the world</h2>
</div> 
 */

function homePage(content) {
  // Reset content div
  content.innerHtml = "";

  // Header div
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Astrochilling";
  headerDiv.appendChild(h1);

  // Header links
  const headerLinksDiv = document.createElement("div");
  headerLinksDiv.classList.add("header-links");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  homeDiv.textContent = "Home";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.textContent = "Menu";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  contactDiv.textContent = "Contact";

  headerLinksDiv.appendChild(homeDiv);
  headerLinksDiv.appendChild(menuDiv);
  headerLinksDiv.appendChild(contactDiv);

  headerDiv.appendChild(headerLinksDiv);

  // Main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  const h2 = document.createElement("h2");
  h2.textContent = `Placeholder text for something actually important`;
  mainDiv.appendChild(h2);

  content.appendChild(headerDiv);
  content.appendChild(mainDiv);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXHJcblxyXG48IS0tIFxyXG48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgPGgxPlRoZSBEYXJrbGluZydzIEFwcGV0aXRlPC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxpbmtzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaG9tZVwiPkhvbWU8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJNZW51XCI+TWVudTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3RcIj5Db250YWN0PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+XHJcbiAgPGgyPlRoZSBiZXN0IGljZSBjcmVhbSBpbiB0aGUgd29ybGQ8L2gyPlxyXG48L2Rpdj4gXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoY29udGVudCkge1xyXG4gIC8vIFJlc2V0IGNvbnRlbnQgZGl2XHJcbiAgY29udGVudC5pbm5lckh0bWwgPSBcIlwiO1xyXG5cclxuICAvLyBIZWFkZXIgZGl2XHJcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoMS50ZXh0Q29udGVudCA9IFwiQXN0cm9jaGlsbGluZ1wiO1xyXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gIC8vIEhlYWRlciBsaW5rc1xyXG4gIGNvbnN0IGhlYWRlckxpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJMaW5rc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWxpbmtzXCIpO1xyXG5cclxuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGhvbWVEaXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuXHJcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICBtZW51RGl2LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgY29udGFjdERpdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICBoZWFkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcclxuICBoZWFkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuICBoZWFkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcclxuXHJcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckxpbmtzRGl2KTtcclxuXHJcbiAgLy8gTWFpbiBkaXZcclxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gYFBsYWNlaG9sZGVyIHRleHQgZm9yIHNvbWV0aGluZyBhY3R1YWxseSBpbXBvcnRhbnRgO1xyXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRGl2KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=