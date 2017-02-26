/**
 * @file Movie Database Result model
 * @description The data structure and functions for the Search Result object
 * @author Andrew James
 * @version 0.1
 */

"use strict";

var Movie = require('./Movie.js');

var Result = function(data) {
  //  We probably should put getter & setter functions here
  //  to ensure that the new properties are set to the correct types

  /**
   * {number}
   */
  this.page = 0;
  /**
   * {Array}
   */
  this.results = [];
  /**
   * {number}
   */
  this.total_results = 0;
  /**
   * {number}
   */
  this.total_pages = 0;

  for(var key in data) {
    if(this.hasOwnProperty(key)) {
      //We need to create Movie objects, so do not add here
      if(key !== 'results') {
        this[key] = data[key];
      }
    }
  }

  if(data.hasOwnProperty('results')) {
    for(var result in data['results']) {
      this.results.push(new Movie(result));
    }
  }
}

module.exports = Result;
