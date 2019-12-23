/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let message = {\r\n    loading: 'loading...',\r\n    success: 'success',\r\n    failure: 'failure...',\r\n};\r\n\r\nlet form = document.querySelector('.form'),\r\n    input = form.getElementsByTagName ('input'),\r\n    statusMessage = document.createElement('div');\r\n \r\n\r\nstatusMessage.classList.add('status');\r\n\r\nfunction sendForm(form){\r\n\r\n    form.addEventListener('submit', event => {\r\n        event.preventDefault();\r\n        form.appendChild(statusMessage);\r\n\r\n        let formData = new FormData(form);\r\n\r\n    function postData() {\r\n        return new Promise( (resolve, reject) => {\r\n            let request = new XMLHttpRequest();\r\n            request.open('POST', 'http:/localhost:3000/api/users/login');\r\n            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\r\n\r\n            request.onreadystatechange = function () {\r\n                if(request.readyState < 4) {\r\n                    resolve();\r\n                } else if (request.readyState === 4) {\r\n                    if (request.status == 200 && request.status < 300) {\r\n                        resolve();\r\n                    } else {\r\n                        reject();\r\n                    }\r\n                }\r\n            };\r\n\r\n            let obj = {};\r\n            formData.forEach ( (value, key) => {\r\n                obj[key] = value;\r\n            });\r\n            let json = JSON.stringify(obj);\r\n            request.send(json);\r\n\r\n        });\r\n    }\r\n\r\n    function clearInput() {\r\n        for (let i = 0; i < input.length; i++) {\r\n            input[i].value = '';\r\n        }\r\n    }\r\n\r\n    postData (formData)\r\n        .then (() => statusMessage.innerHTML = message.loading)\r\n        .then (() => statusMessage.innerHTML = message.sucsess)\r\n        .catch (() => statusMessage.innerHTML = message.failure)\r\n        .then (clearInput);\r\n    });\r\n\r\n}\r\n\r\nsendForm(form);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });