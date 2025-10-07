/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./app.js":
      /*!****************!*\
  !*** ./app.js ***!
  \****************/
      /***/ () => {
        eval(
          "{var input = document.getElementById('todo-input');\nvar addBtn = document.getElementById('add-btn');\nvar todoList = document.getElementById('todo-list');\naddBtn.addEventListener('click', function () {\n  var task = input.value.trim();\n  if (task === '') return;\n  var li = document.createElement('li');\n  li.textContent = task;\n  var deleteBtn = document.createElement('button');\n  deleteBtn.textContent = 'Delete';\n  deleteBtn.addEventListener('click', function () {\n    return li.remove();\n  });\n  li.appendChild(deleteBtn);\n  todoList.appendChild(li);\n  input.value = '';\n});\n\n//# sourceURL=webpack://to-do-app/./app.js?\n}",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./app.js"]();
  /******/
  /******/
})();
