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
   * {string}
   */
  this.poster_path = "";
  /**
   * {boolean}
   */
  this.adult = false;
  /**
   * {string}
   */
  this.overview = "";
  /**
   * {string}
   */
  this.release_date = "";
  /**
   * {Array}
   */
  this.genre_ids = [];
  /**
   * {string}
   */
  this.id = "";
  /**
   * {string}
   */
  this.original_title = "";
  /**
   * {string}
   */
  this.original_language = "";
  /**
   * {string}
   */
  this.title = "";
  /**
   * {string}
   */
  this.backdrop_path = "";
  /**
   * {number}
   */
  this.popularity = 0;
  /**
   * {number}
   */
  this.vote_count = 0;
  /**
   * {boolean}
   */
  this.video = false;
  /**
   * {number}
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
