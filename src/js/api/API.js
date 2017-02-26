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
	 * @param {object} settings - url and method configuration
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
	 * @param {object} settings, {string} searchTerm, {object} searchOptions
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
              resolve(oReq.response);
              break;
            case 401:
            case 404:
            default:
              reject(oReq.response);
          }
        }
      }

      oReq.open(settings.method, requestString);

      oReq.send();
    });
  }
};

module.exports = API;
