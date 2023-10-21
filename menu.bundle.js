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
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const markup = `
  <section class="beverages category">
    <h2>Beverages</h2>
    <div class="beveragesCategoryContent">
      <div class="coffee">
        <div>Coffee</div>
        <div>Come enjoy our cheap and delicious black coffee.</div>
      </div>
      <div class="tea">
        <div>Tea</div>
        <div>
          Green tea, ice tea, honey tea and anything else you might ask for.
        </div>
      </div>
      <div class="cola">
        <div>Cola</div>
        <div>Best drink ever. Not for your health though.</div>
      </div>
      <div class="juice">
        <div>Juice</div>
        <div>All types of juice. All at a great price.</div>
      </div>
    </div>
  </section>

  <section class="mainDishes category">
    <h2>Main Dishes</h2>
    <div class="mainDishesCategoryContent">
      <div class="chickenRice">
        <div>Chicken with Rice</div>
        <div>Nutritious, protein packed and filling.</div>
      </div>
      <div class="spaghetti">
        <div>Spaghetti</div>
        <div>Amazing spaghetti, with tons of ways to cook it.</div>
      </div>
      <div class="fish">
        <div>Fish</div>
        <div>
          A big variety of fish, at an afforadble price. Good for your
          health
          <em>and</em> your wallet.
        </div>
      </div>
      <div class="filled">
        <div>Filled</div>
        <div>
          Traditional greek good: pepperbels
          <strong><em>filled</em></strong> with rice and minced meat.
        </div>
      </div>
    </div>
  </section>

  <section class="desserts category">
    <h2>Desserts</h2>
    <div class="dessertsCategoryContent">
      <div class="profiterol">
        <div>Profiterol</div>
        <div>Best dessert ever.</div>
      </div>
      <div class="chocolateCake">
        <div>Chocolate Cake</div>
        <div>A classic. You can never go wrong with a simple cake.</div>
      </div>
      <div class="tiramisu">
        <div>Tiramisu</div>
        <div>No idea what this is. It has a funny name though.</div>
      </div>
      <div class="cheeseCake">
        <div>Cheesecake</div>
        <div>Cake <i>and</i> cheese? Man oh man.</div>
      </div>
    </div>
  </section>
  `;
  content.insertAdjacentHTML("beforeend", markup);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBgXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJiZXZlcmFnZXMgY2F0ZWdvcnlcIj5cclxuICAgIDxoMj5CZXZlcmFnZXM8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cImJldmVyYWdlc0NhdGVnb3J5Q29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29mZmVlXCI+XHJcbiAgICAgICAgPGRpdj5Db2ZmZWU8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNvbWUgZW5qb3kgb3VyIGNoZWFwIGFuZCBkZWxpY2lvdXMgYmxhY2sgY29mZmVlLjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRlYVwiPlxyXG4gICAgICAgIDxkaXY+VGVhPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIEdyZWVuIHRlYSwgaWNlIHRlYSwgaG9uZXkgdGVhIGFuZCBhbnl0aGluZyBlbHNlIHlvdSBtaWdodCBhc2sgZm9yLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbGFcIj5cclxuICAgICAgICA8ZGl2PkNvbGE8L2Rpdj5cclxuICAgICAgICA8ZGl2PkJlc3QgZHJpbmsgZXZlci4gTm90IGZvciB5b3VyIGhlYWx0aCB0aG91Z2guPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVpY2VcIj5cclxuICAgICAgICA8ZGl2Pkp1aWNlPC9kaXY+XHJcbiAgICAgICAgPGRpdj5BbGwgdHlwZXMgb2YganVpY2UuIEFsbCBhdCBhIGdyZWF0IHByaWNlLjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJtYWluRGlzaGVzIGNhdGVnb3J5XCI+XHJcbiAgICA8aDI+TWFpbiBEaXNoZXM8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5EaXNoZXNDYXRlZ29yeUNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoaWNrZW5SaWNlXCI+XHJcbiAgICAgICAgPGRpdj5DaGlja2VuIHdpdGggUmljZTwvZGl2PlxyXG4gICAgICAgIDxkaXY+TnV0cml0aW91cywgcHJvdGVpbiBwYWNrZWQgYW5kIGZpbGxpbmcuPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3BhZ2hldHRpXCI+XHJcbiAgICAgICAgPGRpdj5TcGFnaGV0dGk8L2Rpdj5cclxuICAgICAgICA8ZGl2PkFtYXppbmcgc3BhZ2hldHRpLCB3aXRoIHRvbnMgb2Ygd2F5cyB0byBjb29rIGl0LjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpc2hcIj5cclxuICAgICAgICA8ZGl2PkZpc2g8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQSBiaWcgdmFyaWV0eSBvZiBmaXNoLCBhdCBhbiBhZmZvcmFkYmxlIHByaWNlLiBHb29kIGZvciB5b3VyXHJcbiAgICAgICAgICBoZWFsdGhcclxuICAgICAgICAgIDxlbT5hbmQ8L2VtPiB5b3VyIHdhbGxldC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxsZWRcIj5cclxuICAgICAgICA8ZGl2PkZpbGxlZDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBUcmFkaXRpb25hbCBncmVlayBnb29kOiBwZXBwZXJiZWxzXHJcbiAgICAgICAgICA8c3Ryb25nPjxlbT5maWxsZWQ8L2VtPjwvc3Ryb25nPiB3aXRoIHJpY2UgYW5kIG1pbmNlZCBtZWF0LlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJkZXNzZXJ0cyBjYXRlZ29yeVwiPlxyXG4gICAgPGgyPkRlc3NlcnRzPC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJkZXNzZXJ0c0NhdGVnb3J5Q29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZml0ZXJvbFwiPlxyXG4gICAgICAgIDxkaXY+UHJvZml0ZXJvbDwvZGl2PlxyXG4gICAgICAgIDxkaXY+QmVzdCBkZXNzZXJ0IGV2ZXIuPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hvY29sYXRlQ2FrZVwiPlxyXG4gICAgICAgIDxkaXY+Q2hvY29sYXRlIENha2U8L2Rpdj5cclxuICAgICAgICA8ZGl2PkEgY2xhc3NpYy4gWW91IGNhbiBuZXZlciBnbyB3cm9uZyB3aXRoIGEgc2ltcGxlIGNha2UuPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGlyYW1pc3VcIj5cclxuICAgICAgICA8ZGl2PlRpcmFtaXN1PC9kaXY+XHJcbiAgICAgICAgPGRpdj5ObyBpZGVhIHdoYXQgdGhpcyBpcy4gSXQgaGFzIGEgZnVubnkgbmFtZSB0aG91Z2guPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlZXNlQ2FrZVwiPlxyXG4gICAgICAgIDxkaXY+Q2hlZXNlY2FrZTwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q2FrZSA8aT5hbmQ8L2k+IGNoZWVzZT8gTWFuIG9oIG1hbi48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiAgYDtcclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==