var Config = require('./Config.js');
var API = require('./API.js');

describe('API functions', () => {

  describe('Authentication API', function(){

    var testPromise;
    var mockUrl = "http://www.mockUrl.com/authentication/token/new?api_key=123456";

    beforeEach(function(){
      // For testing the response
      var mockPromise = new Promise(function(resolve, reject){
        promiseHelper = {
  				resolve: resolve,
          reject: reject
  			};
      });

      spyOn(API, 'requestToken').and.returnValue(mockPromise);

      testPromise = API.requestToken(mockUrl);

    });

    it('returns a promise', function() {
  		expect(testPromise).toEqual(jasmine.any(Promise));
  	});

    it('makes a call to RESTful API New Authentication Token', function() {
  		expect(API.requestToken).toHaveBeenCalledWith(mockUrl);
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
        testPromise.then(function(response){
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

      it('should return an appropriate error message', function(){
        testPromise.then(function(){}, function(error){
          expect(error).toEqual(jasmine.objectContaining({
            "status_message": "Invalid API key: You must be granted a valid key."
          }))
        })
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

      it('should return an appropriate error message', function(){
        testPromise.then(function(){}, function(error){
          expect(error).toEqual(jasmine.objectContaining({
            "status_message": "The resource you requested could not be found."
          }))
        })
      });
    })
  });
});
