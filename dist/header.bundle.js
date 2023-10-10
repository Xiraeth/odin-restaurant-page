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
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/*
<div class="header">
  <h1>Astrochilling</h1>
  <div class="header-links">
    <div class="home">Home</div>
    <div class="Menu">Menu</div>
    <div class="contact">Contact</div>
  </div>
</div>
*/

function createHeader() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

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
  homeDiv.classList.add("header-link");
  homeDiv.classList.add("activeTab");
  homeDiv.textContent = "Home";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.classList.add("header-link");
  menuDiv.textContent = "Menu";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  contactDiv.classList.add("header-link");
  contactDiv.textContent = "Contact";

  headerLinksDiv.appendChild(homeDiv);
  headerLinksDiv.appendChild(menuDiv);
  headerLinksDiv.appendChild(contactDiv);

  headerDiv.appendChild(headerLinksDiv);

  headerLinksDiv.addEventListener("click", (e) => {
    const target = e.target.closest(".header-link");
    if (!target) return;

    const headerLinks = document.querySelectorAll(".header-links div");
    headerLinks.forEach((link) => {
      if (link.classList.contains("activeTab"))
        link.classList.remove("activeTab");
    });
    target.classList.add("activeTab");
  });

  content.appendChild(headerDiv);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gIDxoMT5Bc3Ryb2NoaWxsaW5nPC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxpbmtzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaG9tZVwiPkhvbWU8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJNZW51XCI+TWVudTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3RcIj5Db250YWN0PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJBc3Ryb2NoaWxsaW5nXCI7XHJcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgLy8gSGVhZGVyIGxpbmtzXHJcbiAgY29uc3QgaGVhZGVyTGlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckxpbmtzRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItbGlua3NcIik7XHJcblxyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWxpbmtcIik7XHJcbiAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlVGFiXCIpO1xyXG4gIGhvbWVEaXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuXHJcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItbGlua1wiKTtcclxuICBtZW51RGl2LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWxpbmtcIik7XHJcbiAgY29udGFjdERpdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICBoZWFkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcclxuICBoZWFkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuICBoZWFkZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcclxuXHJcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckxpbmtzRGl2KTtcclxuXHJcbiAgaGVhZGVyTGlua3NEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmhlYWRlci1saW5rXCIpO1xyXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyLWxpbmtzIGRpdlwiKTtcclxuICAgIGhlYWRlckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlVGFiXCIpKVxyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVRhYlwiKTtcclxuICAgIH0pO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVUYWJcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=