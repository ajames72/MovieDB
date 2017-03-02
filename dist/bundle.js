/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Using CommonJS modules with ES5 (we would need to include Babel inorder to use ES6).
	 * Using Webpacks as the module bundler means we can use CommonJS module format
	 * in the browser.
	 * There is no linting in this project, we would configure webpacks to handle linting
	 */

	__webpack_require__(4);
	var SearchPresenter = __webpack_require__(8);

	SearchPresenter.initialise();

	SearchPresenter.createEventListener();


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./MovieDB.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./MovieDB.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/* Poster Sizes */\n/* based on a poster ratio of 13:20 */\nbody {\n  background-color: #004225;\n}\ndiv {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  color: #efefef;\n}\ninput:focus,\nbutton:focus {\n  outline: none;\n}\n#app {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n}\n.tmdb-search {\n  display: inline-block;\n  width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.tmdb-search .tmdb-search__input {\n  width: 580px;\n  float: left;\n}\n.tmdb-search .tmdb-search__input > input {\n  font-size: 1.375em;\n  width: 564px;\n  padding-left: 16px;\n  border: none;\n  box-shadow: none;\n  font-weight: normal;\n  background-color: #efefef;\n  color: #010101;\n  height: 44px;\n  line-height: 44px;\n  float: left;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n}\n.tmdb-search .tmdb-search__submit {\n  float: right;\n  width: 110px;\n}\n.tmdb-search .tmdb-search__submit > button {\n  background: linear-gradient(90deg, #ccc 0%, #999 50%, #ccc 100%);\n  background: -webkit-linear-gradient(90deg, #ccc 0%, #999 50%, #ccc 100%);\n  background: -ms-linear-gradient(90deg, #ccc 0%, #999 50%, #ccc 100%);\n  background: -o-linear-gradient(90deg, #ccc 0%, #999 50%, #ccc 100%);\n  background: -moz-linear-gradient(90deg, #ccc 0%, #999 50%, #ccc 100%);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 20px;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n  box-shadow: none;\n}\n.tmdb-search .tmdb-search__submit > button:hover {\n  background: linear-gradient(90deg, #ddd 0%, #aaa 50%, #ddd 100%);\n  background: -webkit-linear-gradient(90deg, #ddd 0%, #aaa 50%, #ddd 100%);\n  background: -ms-linear-gradient(90deg, #ddd 0%, #aaa 50%, #ddd 100%);\n  background: -o-linear-gradient(90deg, #ddd 0%, #aaa 50%, #ddd 100%);\n  background: -moz-linear-gradient(90deg, #ddd 0%, #aaa 50%, #ddd 100%);\n  text-decoration: none;\n}\n.tmdb-result {\n  display: block;\n  width: auto;\n  margin: 0 7%;\n}\n.tmdb-result .tmdb-movie {\n  display: inline-block;\n}\n.tmdb-result .tmdb-movie > .tmdb-movie__image {\n  display: inline-block;\n  background-color: #005630;\n  width: 102px;\n  height: 151.53846154px;\n  padding: 5px;\n  margin: 5px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n.tmdb-result .tmdb-movie > .tmdb-movie__image > img {\n  width: 87px;\n  height: 136.53846154px;\n  border: 1px solid black;\n}\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Search Presenter
	 * @description The Presenter object to act on the Result model and Search view (index.html)
	 * @author Andrew James
	 * @version 0.1
	 */

	"use strict";

	var Config = __webpack_require__(9);
	var API = __webpack_require__(10);
	var Result = __webpack_require__(11);
	var ResultsTemplate = __webpack_require__(13);

	var SearchPresenter = {
	  /**
	   * @description reference to the test input element
	   * @type {object}
	   */
	  inputField: undefined,
	  /**
	   * @description reference to the submit button element
	   * @type {object}
	   */
	  submitButton: undefined,
	  /**
		 * @description sets reference between the view input elements and the presenter properties
		 * @param none
		 * @returns {boolean}
		 **/
	  initialise: function() {

	    API.getMovieDBConfig(Config.getTMDBConfigurationAPI()).then(function(response) {
	      Config.TMDbConfiguration = response;
	    }, function(error) {
	      //Do something
	    });

	    SearchPresenter.inputField = document.getElementById("searchbox");
	    SearchPresenter.submitButton = document.getElementById("submit");

	    if((typeof SearchPresenter.submitButton !== 'undefined') && (typeof SearchPresenter.inputField !== 'undefined')) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	  /**
		 * @description creates a click listener on the submit button
		 * @param none
		 * @returns none
		 **/
	  createEventListener: function() {
	    SearchPresenter.submitButton.addEventListener('click', function() {
	      SearchPresenter.submit(SearchPresenter.getSearchTerm()).then(
	        function(result) {
	          SearchPresenter.displayResults(result);
	        },
	        function(err) {
	          console.log("error", err.status, err.errorResponse);
	        }
	      );
	    }, false);
	  },
	  /**
		 * @description gets the search term from the input field
		 * @param none
		 * @returns none
		 **/
	  getSearchTerm: function() {
	    return SearchPresenter.inputField.value;
	  },
	  /**
		 * @description search action for the Movie Database RESTful /search/movie resource
		 * @param {string} searchTerm - search term for the searchMovieDB API
		 * @returns {Promise}
		 **/
	  submit: function(searchTerm) {
	    return new Promise(function(resolve, reject) {
	      API.searchMovieDB(Config.getSearchAPI(), searchTerm).then(function(response) {
	        resolve(new Result(response));
	      }, function(error) {
	        reject(error);
	      });

	    });
	  },
	  /**
	   * @description trigger display results process
	   * @param {object} results - the response data from Movie Database search API
	   * @returns none
	   */
	  displayResults: function(results) {

	    var app = document.getElementById("app");

	    var resultsNode = ResultsTemplate.createRootElement();

	    for(var i in results['results']) {
	      var movieNode = ResultsTemplate.createMovieElement(results['results'][i]);

	      resultsNode.appendChild(movieNode);
	    }

	    app.appendChild(resultsNode);
	  }
	}

	module.exports = SearchPresenter;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * @file Movie Database REST API endpoint configuration
	 * @description Functions to get the settings for the Movie Database REST API endpoints. This class could be used to get environment variables i.e. Dev, Q.A, Production
	 * @author Andrew James
	 * @version 0.1
	 */

	"use strict";

	//Private properties
	var API_KEY = "df3908a9e93ea4fa095429a46c0eec66";
	var API_READ_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjM5MDhhOWU5M2VhNGZhMDk1NDI5YTQ2Yz' +
	                            'BlZWM2NiIsInN1YiI6IjU4YWRiOTVkYzNhMzY4MmZkZTAwNmVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdL' +
	                            'CJ2ZXJzaW9uIjoxfQ.z1AZhXbEc6_WO5UagWzSEK9cmn-ih73-ai74tD0jniI';

	var Config = {
	  /**
	   * @description - configuration for the /authentication/token/new API resource
	   * @param none
	   * @returns {object} - the URL and HTTP Method
	   */
	  getNewAuthenticationTokenAPI: function(){
	    return {
	      url: "https://api.themoviedb.org/3/authentication/token/new?api_key=" + API_KEY,
	      method: "GET"
	    };
	  },
	  /**
	   * @description - configuration for the /search/movie API resource
	   * @param none
	   * @returns {object} - the URL and HTTP Method
	   */
	  getSearchAPI: function() {
	    return {
	      url: "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=",
	      method: "GET"
	    }
	  },
	  /**
	   * @description - configuration for the /configuration API resource
	   * @param none
	   * @returns {object} - the URL and HTTP Method
	   */
	  getTMDBConfigurationAPI: function() {
	    return {
	      url: "https://api.themoviedb.org/3/configuration?api_key=" + API_KEY,
	      method: "GET"
	    }
	  },
	  /**
	   * @description
	   * @type {object}
	   */
	  TMDbConfiguration: undefined
	}

	module.exports = Config;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * @file Movie Database API Service
	 * @description Functions to call Movie Database RESTful endpoints
	 * @author Andrew James
	 * @version 0.1
	 */

	"use strict";

	var API = {
	  /**
		 * @description calls the /authentication/token/new resource
		 * @param {object} settings - the url and http method taken from Config
		 * @returns {promise}
		 **/
	  requestToken: function(settings) {
	    return new Promise(function(resolve, reject) {

	      var oReq = new XMLHttpRequest();

	      oReq.onreadystatechange = function(){
	        if(oReq.readyState === 4) {
	          switch(oReq.status) {
	            case 200:
	              resolve(oReq.response);
	              break;
	            case 401:
	            case 404:
	            default:
	              reject(oReq.response);
	          }
	        }
	      }

	      oReq.open(settings.method, settings.url);

	      oReq.send();
	    });
	  },
	  /**
		 * @description calls the /search/movie resource
		 * @param {object} settings - the url and http method taken from Config
	   * @param {string} searchTerm - value used to search the Movie Database
	   * @param {object} searchOptions - additional optional search refinement key value pairs
		 * @returns {promise}
		 **/
	  searchMovieDB: function(settings, searchTerm, searchOptions) {

	    var requestString = settings.url.concat(encodeURI(searchTerm));

	    return new Promise(function(resolve, reject) {
	      var oReq = new XMLHttpRequest();

	      oReq.onreadystatechange = function(){
	        if(oReq.readyState === 4) {
	          switch(oReq.status) {
	            case 200:
	              resolve(JSON.parse(oReq.response));
	              break;
	            case 401:
	            case 404:
	            case 422:
	            default:
	              reject({status: oReq.status, errorResponse: JSON.parse(oReq.response)});
	          }
	        }
	      }

	      oReq.open(settings.method, requestString);

	      oReq.send();
	    });
	  },
	  /**
		 * @description calls the /configuration resource
		 * @param {object} settings - the url and http method taken from Config
		 * @returns {promise}
		 **/
	  getMovieDBConfig: function(settings) {
	    return new Promise(function(resolve, reject) {
	      var oReq = new XMLHttpRequest();

	      oReq.onreadystatechange = function(){
	        if(oReq.readyState === 4) {
	          switch(oReq.status) {
	            case 200:
	              resolve(JSON.parse(oReq.response));
	              break;
	            default:
	              reject({status: oReq.status, errorResponse: JSON.parse(oReq.response)});
	          }
	        }
	      }

	      oReq.open(settings.method, settings.url);

	      oReq.send();
	    })
	  }
	};

	module.exports = API;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Movie Database Result model
	 * @description The data structure and functions for the Search Result object
	 * @author Andrew James
	 * @version 0.1
	 */

	"use strict";

	var Movie = __webpack_require__(12);

	var Result = function(data) {
	  //  We probably should put getter & setter functions here
	  //  to ensure that the new properties are set to the correct types

	  /**
	   * @type {number}
	   */
	  this.page = 0;
	  /**
	   * @type {Array}
	   */
	  this.results = [];
	  /**
	   * @type {number}
	   */
	  this.total_results = 0;
	  /**
	   * @type {number}
	   */
	  this.total_pages = 0;

	  //Set the object properties with the properties from the data
	  for(var key in data) {
	    if(this.hasOwnProperty(key)) {
	      //We need to create Movie objects, so do not add here
	      if(key !== 'results') {
	        this[key] = data[key];
	      }
	    }
	  }
	  //Populate the result list array with Movie objects
	  if(data.hasOwnProperty('results')) {
	    for(var i in data['results']) {
	      this.results.push(new Movie(data['results'][i]));
	    }
	  }
	}

	module.exports = Result;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * @file Movie Database Movie model
	 * @description The data structure and functions for the Movie List Result object
	 * @author Andrew James
	 * @version 0.1
	 */

	"use strict";

	var Movie = function(data) {
	  //  We probably should put getter & setter functions here
	  //  to ensure that the new properties are set to the correct types

	  /**
	   * @type {string}
	   */
	  this.poster_path = "";
	  /**
	   * @type {boolean}
	   */
	  this.adult = false;
	  /**
	   * @type {string}
	   */
	  this.overview = "";
	  /**
	   * @type {string}
	   */
	  this.release_date = "";
	  /**
	   * @type {Array}
	   */
	  this.genre_ids = [];
	  /**
	   * @type {string}
	   */
	  this.id = "";
	  /**
	   * @type {string}
	   */
	  this.original_title = "";
	  /**
	   * @type {string}
	   */
	  this.original_language = "";
	  /**
	   * @type {string}
	   */
	  this.title = "";
	  /**
	   * @type {string}
	   */
	  this.backdrop_path = "";
	  /**
	   * @type {number}
	   */
	  this.popularity = 0;
	  /**
	   * @type {number}
	   */
	  this.vote_count = 0;
	  /**
	   * @type {boolean}
	   */
	  this.video = false;
	  /**
	   * @type {number}
	   */
	  this.vote_average = 0;

	  //Set the object properties with the properties from the data
	  for(var key in data) {
	    if(this.hasOwnProperty(key)) {
	      this[key] = data[key];
	    }
	  }
	};

	module.exports = Movie;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Results Template
	 * @description Object to manage the display of the search results
	 * @author Andrew James
	 * @version 0.1
	 */

	"use strict";

	var Config = __webpack_require__(9);

	var ResultsTemplate = {
	  /**
	   * @description helper function to generate HTMLElement objects
	   * @param {string} nodeName - the HTMLElement name
	   * @param {object} attributes - key value pair element attributes
	   * @returns {HTMLElement}
	   **/
	  createHTMLElement: function(nodeName, attributes) {

	    var newElement = document.createElement(nodeName);

	    if((attributes !== null) && (typeof attributes === 'object')) {
	      //Set attributes
	      for(var key in attributes) {
	        if((key === 'className') || (key === 'class')) {
	          newElement.className = attributes[key];
	        } else if((key === 'style') && (typeof attributes['style'] === 'object')) {
	          //Loop through style key/values
	          var styles = attributes['style'];

	          for(style in styles) {
	            newElement.style[style] = styles[style];
	          }
	        } else {
	          newElement.setAttribute(key, attributes[key]);
	        }

	      }
	    }

	    return newElement;
	  },
	  /**
	   * @description creates the results wrapper DIV element
	   * @param none
	   * @returns {HTMLElement}
	   **/
	  createRootElement: function() {

	    return ResultsTemplate.createHTMLElement('div', {
	      className: "tmdb-result"
	    });

	  },
	  /**
	   * @description creates a movie display DIV element
	   * @param {Movie} movie - movie data
	   * @returns {HTMLElement}
	   **/
	  createMovieElement: function(movie) {
	    var movieWrapperCell = ResultsTemplate.createHTMLElement('div', {
	      className: "tmdb-movie"
	    });

	    movieWrapperCell.appendChild(ResultsTemplate.createMovieImageElement(movie['poster_path'], movie['original_title']));

	    var movieDescription = ResultsTemplate.createHTMLElement('div', {
	      className: "tmdb-movie__description"
	    });

	    movieWrapperCell.appendChild(movieDescription);

	    return movieWrapperCell;
	  },
	  /**
	   * @description creates the movie img element and DIV wrapper
	   * @param {string} posterPath - the path for the poster image taken from Movie.poster_path
	   * @param {string} altText - movie img alt text taken from Movie.original_title
	   * @returns {HTMLElement}
	   **/
	  createMovieImageElement: function(posterPath, altText) {
	    //We could do lazy loading of the image,
	    //check the image properties as it's loaded for height,
	    //width & orientation to determine best presentation
	    //but for now, just set the image path.

	    var movieImage = ResultsTemplate.createHTMLElement('div', {
	      className: "tmdb-movie__image"
	    });

	    //Do a test here to check the config has been loaded.
	    var imgBasePath = Config.TMDbConfiguration.images.base_url;
	    var movieImgElement = ResultsTemplate.createHTMLElement('img', {
	      src: imgBasePath.concat(Config.TMDbConfiguration.images.poster_sizes[0], posterPath),
	      alt: altText
	    });

	    movieImage.appendChild(movieImgElement);

	    return movieImage;
	  }
	}

	module.exports = ResultsTemplate;


/***/ }
/******/ ]);