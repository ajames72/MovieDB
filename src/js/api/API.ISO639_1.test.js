var Config = require('./Config.js');
var API = require('./API.js');

describe('Config API', function() {

  var mockSettings = {
    url: "http://www.mockUrl.com/data/core/language-codes/r/language-codes.json", method: "GET"
  };

  describe('API response on a status code 200', function() {
    var fakeServer, spyCallback;
    var testXHRResponse;

    beforeEach(function() {

      var mockResponse = [
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
      testXHRResponse = API.getISO639_1Codes(mockSettings);
    });

    afterEach(function() {

      fakeServer.respond();

      fakeServer.restore();

    });

    it('should return a list of ISO639-1 International Language Codes in the response', function(){
      testXHRResponse.then(function(response){
        expect(response[0]).toEqual(jasmine.objectContaining({
          "alpha2": "de"
        }));
      });
    });
  });
});
