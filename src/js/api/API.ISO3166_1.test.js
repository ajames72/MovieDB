var Config = require('./Config.js');
var API = require('./API.js');

describe('Config API', function() {

  var mockSettings = {
    url: "http://www.mockUrl.com/data/core/country-list/r/data.json", method: "GET"
  };

  describe('API response on a status code 200', function() {
    var fakeServer, spyCallback;
    var testXHRResponse;

    beforeEach(function() {

      var mockResponse = [
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
      ];

      fakeServer = sinon.fakeServer.create();
      spyCallback = sinon.spy();

      fakeServer.respondWith(
        "GET",
        "http://www.mockUrl.com/data/core/language-codes/r/language-codes.json",
        [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify(mockResponse)
        ]
      );
    });

    beforeEach(function() {
      testXHRResponse = API.getISO3166_1Codes(mockSettings);
    });

    afterEach(function() {

      fakeServer.respond();

      fakeServer.restore();

    });

    it('should return a list of ISO3166-1 International Language Codes in the response', function(){
      testXHRResponse.then(function(response){
        expect(response[0]).toEqual(jasmine.objectContaining({
          "Code": "DE"
        }));
      });
    });
  });
});
