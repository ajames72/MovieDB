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
