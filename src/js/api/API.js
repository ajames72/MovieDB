/**
 *
 */
var API = {
  requestToken: function(url) {
    return new Promise(function(resolve, reject) {

      var oReq = new XMLHttpRequest();
      var settings = url;

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
