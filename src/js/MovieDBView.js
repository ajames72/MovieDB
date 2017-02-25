"use strict";

var API = require('./api/API.js');
var Config = require('./api/Config.js')

var SubmitButton = function() {
  console.log("i'm being clicked");

}

var MovieDBView = {

  createEventListener: function() {
    var submitButton = document.getElementById("submit");

    if(typeof submitButton !== 'undefined') {
      submitButton.addEventListener('click', SubmitButton);
      return true;
    } else {
      console.error("Cannot find buton element");
      return false;
    }
  }
}

module.exports = MovieDBView;
