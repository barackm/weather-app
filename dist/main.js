/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/main.css":
/*!***********************!*\
  !*** ./dist/main.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url('https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap');\\n| @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\\n| @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\");\n\n//# sourceURL=webpack://weather-app/./dist/main.css?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet Faraneight = false;\nconst render = (() => {\n  const renderWeatherInfo = (weatherData) => {\n    const { data, icon, getCurrentDate } = weatherData;\n    const mainContainer = document.getElementById('content');\n    const header = document.createElement('div');\n    const appContainer = document.querySelector('.app-wrapper');\n    appContainer.innerHTML = '';\n    const cityInfo = document.createElement('div');\n    const inputWrapper = document.createElement('div');\n    const form = document.createElement('form');\n    const inputText = document.createElement('input');\n    const submitBtn = document.createElement('button');\n    const weatherInfoWrapper = document.createElement('div');\n    const tempWrapper = document.createElement('div');\n    const iconWrapper = document.createElement('div');\n    const tempDetails = document.createElement('div');\n    const weatherStats = document.createElement('div');\n\n    console.log(data);\n    mainContainer.style.backgroundImage = `url(${icon.img})`;\n    header.classList += 'header-wrapper flex-between w-10';\n    weatherInfoWrapper.classList\n      += 'main-weather-info-wrapper flex-center w-10';\n    cityInfo.classList += 'city-infos flex-column';\n    tempDetails.classList += 'temps-details';\n    iconWrapper.classList += 'icon-weather-wrapper';\n    weatherStats.classList += 'weather-stats-details';\n    tempWrapper.classList += 'temp-area flex-center';\n    cityInfo.innerHTML = `<h1>${data.name}</h1>\n    <h4 class=\"m-0\">${getCurrentDate()}</h4>`;\n    submitBtn.innerHTML = '<i class=\"bi bi-arrow-right-circle arrow-icon\"></i>';\n    inputWrapper.classList += 'input-wrapper';\n    weatherStats.innerHTML = `<div class=\"stat-item\">\n    <h2>\n      ${data.main.temp_max}\n      <div class=\"degree-circle\"></div>\n    </h2>\n    <span>High</span>\n  </div>\n  <div class=\"stat-item\">\n    <h2 class='text-center'>${data.wind.speed}<span class='unity-measure'>mph</span></h2>\n    <span>Wind</span>\n  </div>\n  <div class=\"stat-item\">\n    <h2>${data.wind.deg}</h2>\n    <span>Wind</span>\n  </div>\n  <div class=\"stat-item\">\n    <h2>\n    ${data.main.temp_min}\n      <div class=\"degree-circle\"></div>\n    </h2>\n    <span>Low</span>\n  </div>\n  <div class=\"stat-item\">\n    <h2>${data.main.pressure}</h2>\n    <span>Pressure</span>\n  </div>\n  <div class=\"stat-item\">\n    <h2>${data.main.humidity}%</h2>\n    <span>Humidity</span>\n  </div>`;\n\n    inputText.setAttribute('type', 'text');\n    inputText.setAttribute('placeholder', 'Search City...');\n    inputText.classList += 'city-input';\n    submitBtn.setAttribute('type', 'submit');\n    form.setAttribute('id', 'my-form');\n    iconWrapper.innerHTML = `${icon.icon}`;\n    tempDetails.innerHTML = `<div class=\"temp\">\n    <h1>\n      ${\n  Faraneight ? (data.main.temp * (9 / 5) + 32).toFixed(2) : data.main.temp\n  }\n      <div class=\"degree-circle\"></div>\n    </h1>\n  </div>\n  <div class=\"description\">${data.weather[0].description}</div>\n  <div class=\"unity-toggler-btns flex-center\">\n    <a href=\"#\">${Faraneight ? 'F' : 'C'}</a>\n  </div>`;\n    form.appendChild(inputText);\n    form.appendChild(submitBtn);\n    inputWrapper.appendChild(form);\n    header.appendChild(cityInfo);\n    header.appendChild(inputWrapper);\n    tempWrapper.appendChild(iconWrapper);\n    tempWrapper.appendChild(tempDetails);\n    weatherInfoWrapper.appendChild(tempWrapper);\n    weatherInfoWrapper.appendChild(weatherStats);\n    appContainer.appendChild(header);\n    appContainer.appendChild(weatherInfoWrapper);\n\n    const unityToggler = document.querySelector('.unity-toggler-btns');\n    unityToggler.addEventListener('click', (e) => {\n      e.preventDefault();\n      Faraneight = !Faraneight;\n      renderWeatherInfo(weatherData);\n    });\n  };\n\n  const showError = (ex) => {\n    const errorContainer = document.createElement('div');\n    const appContainer = document.querySelector('.app-wrapper');\n    errorContainer.classList\n      += 'error-message-container flex-center text-center';\n    errorContainer.innerHTML = `<p>${ex.message}</p>`;\n    appContainer.appendChild(errorContainer);\n  };\n  return {\n    renderWeatherInfo,\n    showError,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst icons = [\n  {\n    description: 'thunderstorm',\n    icon: '<i class=\"bi bi-cloud-lightning-rain-fill\"></i>',\n    img: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'drizzle',\n    icon: '<i class=\"bi bi-cloud-drizzle-fill\"></i>',\n    img: 'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'rain',\n    icon: '<i class=\"bi bi-cloud-rain-heavy-fill\"></i>',\n    img: 'https://images.pexels.com/photos/2600937/pexels-photo-2600937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'atmosphere',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'clear',\n    icon: '<i class=\"bi bi-clouds-fill\"></i>',\n    img: 'https://images.pexels.com/photos/5046350/pexels-photo-5046350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'clouds',\n    icon: '<i class=\"bi bi-cloud-fill\"></i>',\n    img: 'https://images.pexels.com/photos/2086748/pexels-photo-2086748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Mist',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Smoke',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Haze',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Dust',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Fog',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Sand',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Dust',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Ash',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Squall',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n  {\n    description: 'Tornado',\n    icon: '<i class=\"bi bi-cloud-sun-fill\"></i>',\n    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',\n  },\n];\n\nconst helper = (() => {\n  const getIcon = (desc) => {\n    const myIcon = icons.filter(\n      (item) => item.description === desc.toLowerCase(),\n    );\n    return myIcon.length === 0 ? icons[0] : myIcon[0];\n  };\n\n  const getData = async (location = 'Kigali') => {\n    const apiKey = 'e89012cc28912f22e32bfd3770ad7140';\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;\n    const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kigali&units=metric&APPID=${apiKey}`;\n    let data;\n\n    const defaultData = await fetch(defaultUrl, { mode: 'cors' });\n\n    await fetch(url, { mode: 'cors' })\n      .then((res) => {\n        data = res.json();\n      })\n      .catch(async (ex) => {\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.showError(ex);\n        data = await defaultData.json();\n      });\n\n    return data;\n  };\n  const getCurrentDate = () => {\n    const months = [\n      'January',\n      'February',\n      'March',\n      'April',\n      'May',\n      'June',\n      'July',\n      'August',\n      'September',\n      'October',\n      'November',\n      'December',\n    ];\n    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];\n    const d = new Date();\n    return `${days[d.getDay() - 1]}, ${d.getDate()} ${months[d.getMonth()]}`;\n  };\n\n  const getWeather = async (location) => {\n    const data = await getData(location);\n    if (data.cod === '404') {\n      return _dom__WEBPACK_IMPORTED_MODULE_0__.default.showError(data);\n    }\n\n    const icon = getIcon(data.weather[0].main);\n    return _dom__WEBPACK_IMPORTED_MODULE_0__.default.renderWeatherInfo({ data, icon, getCurrentDate });\n  };\n\n  return {\n    getCurrentDate,\n    getWeather,\n    getData,\n    getIcon,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helper);\n\n\n//# sourceURL=webpack://weather-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _dist_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/main.css */ \"./dist/main.css\");\n/* harmony import */ var _dist_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst lastCity = localStorage.getItem('weather-city');\n_helper__WEBPACK_IMPORTED_MODULE_0__.default.getWeather(lastCity || 'Kigali');\n\nconst form = document.getElementById('content');\n\nif (form) {\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const query = document.querySelector('.city-input');\n    localStorage.setItem('weather-city', query.value);\n    _helper__WEBPACK_IMPORTED_MODULE_0__.default.getWeather(localStorage.getItem('weather-city'));\n  });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;