/*
  Get the Movie Database RESTful APIs from here.
  This class could be used to get environment variables i.e. Dev, Q.A, Production
*/

"use strict";

var API_KEY = "df3908a9e93ea4fa095429a46c0eec66";
var API_READ_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjM5MDhhOWU5M2VhNGZhMDk1NDI5YTQ2Yz' +
                            'BlZWM2NiIsInN1YiI6IjU4YWRiOTVkYzNhMzY4MmZkZTAwNmVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdL' +
                            'CJ2ZXJzaW9uIjoxfQ.z1AZhXbEc6_WO5UagWzSEK9cmn-ih73-ai74tD0jniI';

var Config = {
  getNewAuthenticationTokenAPI: function(){
    return {
      url: "https://api.themoviedb.org/3/authentication/token/new?api_key=" + API_KEY,
      method: "GET"
    };
  }
}

module.exports = Config;
