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

var SearchPresenter = {
  /**
   * @type {object}
   */
  inputField: undefined,
  /**
   * @type {object}
   */
  submitButton: undefined,
  /**
	 * @description sets reference between the view input elements and the presenter properties
	 * @param none
	 * @returns {boolean}
	 **/
  initialise: function() {
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
      SearchPresenter.submit(SearchPresenter.getSearchTerm());
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
        reject();
      });

    });
  }
}

module.exports = SearchPresenter;
