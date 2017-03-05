/**
 * @file Search Presenter
 * @description The Presenter object to act on the Result model and Search view (index.html)
 * @author Andrew James
 * @version 0.1
 */

"use strict";

var Config = require('../api/Config.js');
var API = require('../api/API.js');
var Result = require('../models/Result.js');
var ResultsTemplate = require('../templates/ResultsTemplate.js');



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
    /* @TODO put into functions */
    API.getMovieDBConfig(Config.getTMDBConfigurationAPI()).then(function(response) {
      Config.TMDbConfiguration = response;
    }, function(error) {
      //Do something
    });

    API.getISO639_1Codes(Config.getISO639_1CodeSrc()).then(function(response) {
      var languageOptionField = document.getElementById("langOpts");
      languageOptionField.appendChild(ResultsTemplate.createLanguageOptionElement(response));
    }, function(error) {

    });

    API.getISO3166_1Codes(Config.getISO3166_1CodeSrc()).then(function(response) {
      var regionOptionField = document.getElementById("regionOpts");
      regionOptionField.appendChild(ResultsTemplate.createRegionOptionElement(response));
    }, function(error) {

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
      SearchPresenter.submit(SearchPresenter.getSearchParameters()).then(
        function(result) {
          SearchPresenter.removeResults();
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
  /*
  getSearchTerm: function() {
    return SearchPresenter.inputField.value;
  },
  */
  /**
	 * @description gets the search term from the input field plus search options and creates an encoded URL parameter string
	 * @param none
	 * @returns {string}
	 **/
  getSearchParameters: function() {
    var parameters = SearchPresenter.inputField.value;
    var options = SearchPresenter.getSearchOptions();

    for(var key in options) {
      if(options.hasOwnProperty(key)) {
        parameters = parameters.concat(options[key]);
      }
    }

    return encodeURI(parameters);
  },
  /**
	 * @description gets the search options
	 * @param none
	 * @returns {object}
	 **/
  getSearchOptions: function() {
    var inputElements = document.getElementsByClassName('tmdb-search-option');

    var options = {};

    if(inputElements[0].checked) {
      options['include_adult'] = "&include_adult=true";
    }

    var language = inputElements[1].options[inputElements[1].selectedIndex].value;

    if(language !== 'any') {
      options['language'] = "&language=" + language;
    }

    var region = inputElements[2].options[inputElements[2].selectedIndex].value;

    if(region !== 'any') {
      options['region'] = "&region=" + region;
    }

    var year = parseInt(inputElements[3].value, 10);

    if(!isNaN(year)) {
      options['year'] = "&year=" + year;
    }

    var primary = parseInt(inputElements[4].value, 10);

    if(!isNaN(primary)) {
      options['primary_release_year'] = "&primary_release_year=" + primary;
    }

    return options;
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
    // Need to clear previous results
    var app = document.getElementById("app");

    var resultsNode = ResultsTemplate.createRootElement();

    for(var i in results['results']) {
      var movieNode = ResultsTemplate.createMovieElement(results['results'][i]);

      resultsNode.appendChild(movieNode);
    }

    app.appendChild(resultsNode);
  },
  /**
   * @description remove previous results
   * @param none
   * @returns none
   */
  removeResults: function() {
    var element = document.getElementById("tmdb-result");

    if(element instanceof HTMLElement) {
      element.parentNode.removeChild(element);
    }
  }
}

module.exports = SearchPresenter;
