/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food-app/food.ts":
/*!******************************!*\
  !*** ./src/food-app/food.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Food": () => (/* binding */ Food)
/* harmony export */ });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ "./src/food-app/score.ts");

class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food-active");
        const score = _score__WEBPACK_IMPORTED_MODULE_0__.Score.getInstance();
        score.render();
        /**
         * thisの解説
         *
         * clickEventHandlerメソッド内のthisはFoodクラスではなく、
         * 引数から渡ってきたelement<div class="food">タグそのものを指しており、エラーになってしまう。
         * （タグそのものにelementというプロパティはない。）
         */
    }
}


/***/ }),

/***/ "./src/food-app/foods.ts":
/*!*******************************!*\
  !*** ./src/food-app/foods.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Foods": () => (/* binding */ Foods)
/* harmony export */ });
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ "./src/food-app/food.ts");

class Foods {
    constructor() {
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach((element) => {
            new _food__WEBPACK_IMPORTED_MODULE_0__.Food(element);
        });
    }
    // アクティブになっている要素の配列を取得
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach((element) => {
            if (element.classList.contains("food-active")) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    // アクティブになっている要素の数値を取得する配列を取得
    get activeElementsScore() {
        this._activeElementsScore = [];
        // activeElementsゲッターの実行
        this.activeElements.forEach((element) => {
            const foodScore = element.querySelector(".food_score");
            if (foodScore) {
                /**
                 * NUmber() → コンストラクタ関数
                 * Numberオブジェクトを作成する。
                 *
                 * Nullは0
                 * 「+」の文字が入っていても、Number()は正の数としてキャストしてくれる。
                 */
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        console.log(this._activeElementsScore);
        return this._activeElementsScore;
    }
    /**
     * シングルtパターンインスタンスの作成
     */
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}


/***/ }),

/***/ "./src/food-app/score.ts":
/*!*******************************!*\
  !*** ./src/food-app/score.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foods */ "./src/food-app/foods.ts");

class Score {
    constructor() { }
    get totalScore() {
        const foods = _foods__WEBPACK_IMPORTED_MODULE_0__.Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector(".score_number").textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/food-app/main.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foods */ "./src/food-app/foods.ts");

_foods__WEBPACK_IMPORTED_MODULE_0__.Foods.getInstance();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUN6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjhCO0FBQ3ZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1Q0FBSTtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGdDO0FBQ3pCO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQixxREFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDaEMscURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoYXBwLy4vc3JjL2Zvb2QtYXBwL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vaGVhbHRoYXBwLy4vc3JjL2Zvb2QtYXBwL2Zvb2RzLnRzIiwid2VicGFjazovL2hlYWx0aGFwcC8uL3NyYy9mb29kLWFwcC9zY29yZS50cyIsIndlYnBhY2s6Ly9oZWFsdGhhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVhbHRoYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWFsdGhhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWFsdGhhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWFsdGhhcHAvLi9zcmMvZm9vZC1hcHAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL3Njb3JlXCI7XG5leHBvcnQgY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjbGlja0V2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJmb29kLWFjdGl2ZVwiKTtcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBTY29yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBzY29yZS5yZW5kZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoaXPjga7op6PoqqxcbiAgICAgICAgICpcbiAgICAgICAgICogY2xpY2tFdmVudEhhbmRsZXLjg6Hjgr3jg4Pjg4nlhoXjga50aGlz44GvRm9vZOOCr+ODqeOCueOBp+OBr+OBquOBj+OAgVxuICAgICAgICAgKiDlvJXmlbDjgYvjgonmuKHjgaPjgabjgY3jgZ9lbGVtZW50PGRpdiBjbGFzcz1cImZvb2RcIj7jgr/jgrDjgZ3jga7jgoLjga7jgpLmjIfjgZfjgabjgYrjgorjgIHjgqjjg6njg7zjgavjgarjgaPjgabjgZfjgb7jgYbjgIJcbiAgICAgICAgICog77yI44K/44Kw44Gd44Gu44KC44Gu44GrZWxlbWVudOOBqOOBhOOBhuODl+ODreODkeODhuOCo+OBr+OBquOBhOOAgu+8iVxuICAgICAgICAgKi9cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kIH0gZnJvbSBcIi4vZm9vZFwiO1xuZXhwb3J0IGNsYXNzIEZvb2RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9vZFwiKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIG5ldyBGb29kKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Gr44Gq44Gj44Gm44GE44KL6KaB57Sg44Gu6YWN5YiX44KS5Y+W5b6XXG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZvb2QtYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50cztcbiAgICB9XG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Gr44Gq44Gj44Gm44GE44KL6KaB57Sg44Gu5pWw5YCk44KS5Y+W5b6X44GZ44KL6YWN5YiX44KS5Y+W5b6XXG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzU2NvcmUoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgLy8gYWN0aXZlRWxlbWVudHPjgrLjg4Pjgr/jg7zjga7lrp/ooYxcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb29kU2NvcmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vZF9zY29yZVwiKTtcbiAgICAgICAgICAgIGlmIChmb29kU2NvcmUpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBOVW1iZXIoKSDihpIg44Kz44Oz44K544OI44Op44Kv44K/6Zai5pWwXG4gICAgICAgICAgICAgICAgICogTnVtYmVy44Kq44OW44K444Kn44Kv44OI44KS5L2c5oiQ44GZ44KL44CCXG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiBOdWxs44GvMFxuICAgICAgICAgICAgICAgICAqIOOAjCvjgI3jga7mloflrZfjgYzlhaXjgaPjgabjgYTjgabjgoLjgIFOdW1iZXIoKeOBr+ato+OBruaVsOOBqOOBl+OBpuOCreODo+OCueODiOOBl+OBpuOBj+OCjOOCi+OAglxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUucHVzaChOdW1iZXIoZm9vZFNjb3JlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOOCt+ODs+OCsOODq3Tjg5Hjgr/jg7zjg7PjgqTjg7Pjgrnjgr/jg7Pjgrnjga7kvZzmiJBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRm9vZHMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEZvb2RzLmluc3RhbmNlID0gbmV3IEZvb2RzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZvb2RzLmluc3RhbmNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZvb2RzIH0gZnJvbSBcIi4vZm9vZHNcIjtcbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBnZXQgdG90YWxTY29yZSgpIHtcbiAgICAgICAgY29uc3QgZm9vZHMgPSBGb29kcy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gZm9vZHMuYWN0aXZlRWxlbWVudHNTY29yZS5yZWR1Y2UoKHRvdGFsLCBzY29yZSkgPT4gdG90YWwgKyBzY29yZSwgMCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZV9udW1iZXJcIikudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIVNjb3JlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBTY29yZS5pbnN0YW5jZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTY29yZS5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEZvb2RzIH0gZnJvbSBcIi4vZm9vZHNcIjtcbkZvb2RzLmdldEluc3RhbmNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=