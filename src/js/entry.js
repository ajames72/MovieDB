/**
 * Using CommonJS modules with ES5 (we would need to include Babel inorder to use ES6).
 * Using Webpacks as the module bundler means we can use CommonJS module format
 * in the browser.
 * There is no linting in this project, we would configure webpacks to handle linting
 */

require("../less/MovieDB.less");

var MovieDBView = require('./MovieDBView.js');

MovieDBView.createEventListener();
