var Config = require('./Config.js');
var API = require('./API.js');

describe('API functions', () => {

  describe('Authentication API', function(){

    var testAuthenticationAPIResponse;
    var mockUrl = "http://www.mockUrl.com/authentication/token/new?api_key=123456";

    beforeEach(function(){

      spyOn(API, 'requestToken').and.callThrough();

      testAuthenticationAPIResponse = API.requestToken(mockUrl);

    });

    it('returns a promise', function() {
  		expect(testAuthenticationAPIResponse).toEqual(jasmine.any(Promise));
  	});

    it('makes a call to RESTful API New Authentication Token', function() {
  		expect(API.requestToken).toHaveBeenCalledWith(mockUrl);
  	});

    describe('New Authentication Token API responses', function(){
      var testAuthenticationAPIResponse;
      var mockUrl = "http://www.mockUrl.com/authentication/token/new?api_key=123456";

      beforeEach(function(){
        // For testing the response
        var mockPromise = new Promise(function(resolve, reject){
          promiseHelper = {
    				resolve: resolve,
            reject: reject
    			};
        });

        //Need to reset spy
        API.requestToken = jasmine.createSpy().and.returnValue(mockPromise);

        testAuthenticationAPIResponse = API.requestToken(mockUrl);

      });

      describe('on successful request', function(){
        beforeEach(function(){

          var mockResponse =
          {
            "success": true,
            "expires_at": "2017-02-24 10:36:05 UTC",
            "request_token": "06c70e260ec1b96eb7f217a9a54a4d7d0897320c"
          };

          promiseHelper.resolve(mockResponse);
        });

        it('should request an authentication token', function(done){
          testAuthenticationAPIResponse.then(function(response){
            expect(response).toEqual(jasmine.objectContaining({
              "request_token": "06c70e260ec1b96eb7f217a9a54a4d7d0897320c"
            }));
            done();
          });
        });
      });

      describe('on a 401 response', function(){
        beforeEach(function(){
          var mockFailedResponse =
          {
            "status_code": 7,
            "status_message": "Invalid API key: You must be granted a valid key."
          };

          promiseHelper.reject(mockFailedResponse);
        });

        it('should return an appropriate error message', function(done){
          testAuthenticationAPIResponse.then(function(){}, function(error){
            expect(error).toEqual(jasmine.objectContaining({
              "status_message": "Invalid API key: You must be granted a valid key."
            }));
            done();
          });
        });
      });

      describe('on a 404 response', function(){
        beforeEach(function(){
          var mockFailedResponse =
          {
            "status_code": 34,
            "status_message": "The resource you requested could not be found."
          };

          promiseHelper.reject(mockFailedResponse);
        });

        it('should return an appropriate error message', function(done){
          testAuthenticationAPIResponse.then(function(){}, function(error){
            expect(error).toEqual(jasmine.objectContaining({
              "status_message": "The resource you requested could not be found."
            }));
            done();
          });
        });
      });
    });

  });

  describe('Search Movie API', function(){
    var testSearchAPIResponse;
    var mockSettings = {
      url: "http://www.mockUrl.com/3/search/movie?api_key=123456&query=", method: "GET"
    };
    var searchTerm = "Search Term";
    var searchOptions = {
      language: "en-GB",
      include_adult: false
    }

    beforeEach(function(){

      spyOn(API, 'searchMovieDB').and.callThrough();

      testSearchAPIResponse = API.searchMovieDB(mockSettings, searchTerm);

    });

    it('returns a promise', function() {
  		expect(testSearchAPIResponse).toEqual(jasmine.any(Promise));
  	});

    it('makes a call to RESTful Search Movie API', function() {
  		expect(API.searchMovieDB).toHaveBeenCalledWith(mockSettings, searchTerm);
  	});

    it('makes a call to RESTful Search Movie API with optional arguments', function(){

      API.searchMovieDB(mockSettings, searchTerm, searchOptions);

      expect(API.searchMovieDB).toHaveBeenCalledWith(mockSettings, searchTerm, searchOptions);
    });

    describe('API responses', function(){
      beforeEach(function(){
        var mockPromise = new Promise(function(resolve, reject){
          promiseHelper = {
    				resolve: resolve,
            reject: reject
    			};
        });

        //reset
        API.searchMovieDB = jasmine.createSpy().and.returnValue(mockPromise);

        testSearchAPIResponse = API.searchMovieDB(mockSettings, searchTerm, searchOptions);
      });

      describe('on a successful request', function() {
        beforeEach(function() {
          var mockResponse =
          {
            "page": 1,
            "results": [],
            "total_results": 10,
            "total_pages": 10
          };

          promiseHelper.resolve(mockResponse);
        });

        it('should return a list of results', function(done){
          testSearchAPIResponse.then(function(response){
            expect(response.results).toEqual(jasmine.any(Array));
            done();
          });
        });
      });


      describe('on a 401 response', function() {
        beforeEach(function() {
          var mockFailedResponse = {
            "status_message": "Invalid API key: You must be granted a valid key.",
            "success": false,
            "status_code": 7
          };

          promiseHelper.reject(mockFailedResponse);
        });

        it('should return an appropriate error message', function(done){
          testSearchAPIResponse.then(function(){}, function(error){
            expect(error).toEqual(jasmine.objectContaining({
              "status_message": "Invalid API key: You must be granted a valid key."
            }));
            done();
          });
        });
      });

      describe('on a 404 response', function() {
        beforeEach(function() {

          var mockFailedResponse = {
            "status_message": "The resource you requested could not be found.",
            "status_code": 34
          };

          promiseHelper.reject(mockFailedResponse);
        });

        it('should return an appropriate error message', function(done){
          testSearchAPIResponse.then(function(){}, function(error){
            expect(error).toEqual(jasmine.objectContaining({
              "status_message": "The resource you requested could not be found."
            }));
            done();
          });
        });
      });
    });
  })
});
