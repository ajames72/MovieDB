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
   * @param {string} searchParameters - value used to search the Movie Database plus additional optional search refinement key value pairs
	 * @returns {promise}
	 **/
  searchMovieDB: function(settings, searchParameters) {

    var requestString = settings.url.concat(searchParameters);

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
  },
  getISO639_1Codes: function(settings) {
    return new Promise(function(resolve, reject) {
      var oReq = new XMLHttpRequest();

      oReq.onreadystatechange = function(){
        if(oReq.readyState === 4) {
          switch(oReq.status) {
            case 200:
              resolve(JSON.parse(oReq.response));
              break;
            default:
              reject({status: oReq.status, errorResponse: [
                {
                  "alpha2": "de",
                  "English": "German"
                },
                {
                  "alpha2": "en",
                  "English": "English"
                },
                {
                  "alpha2": "es",
                  "English": "Spanish; Castilian"
                },
                {
                  "alpha2": "fr",
                  "English": "French"
                },
                {
                  "alpha2": "ja",
                  "English": "Japanese"
                },
                {
                  "alpha2": "ru",
                  "English": "Russian"
                },
                {
                  "alpha2": "tl",
                  "English": "Tagalog"
                },
                {
                  "alpha2": "zh",
                  "English": "Chinese"
                }
              ]});
          }
        }
      }

      oReq.open(settings.method, settings.url);

      oReq.send();
    });
  },
  getISO3166_1Codes: function(settings) {
    return new Promise(function(resolve, reject) {
      var oReq = new XMLHttpRequest();

      oReq.onreadystatechange = function(){
        if(oReq.readyState === 4) {
          switch(oReq.status) {
            case 200:
              resolve(JSON.parse(oReq.response));
              break;
            default:
              reject({status: oReq.status, errorResponse: [
                {
                  "Name": "Germany",
                  "Code": "DE"
                },
                {
                  "Name": "United Kingdom",
                  "Code": "GB"
                },
                {
                  "Name": "United States",
                  "Code": "US"
                },
                {
                  "Name": "China",
                  "Code": "CN"
                }
              ]});
          }
        }
      }

      oReq.open(settings.method, settings.url);

      oReq.send();
    });
  }
};

module.exports = API;
