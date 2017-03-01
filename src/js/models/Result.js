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
