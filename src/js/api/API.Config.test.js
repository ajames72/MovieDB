var Config = require('./Config.js');
var API = require('./API.js');



describe('Config API', function() {

  var testConfigAPIResponse;
  var mockUrl = "http://www.mockUrl.com/3/configuration?api_key=123456";
  var mockSettings = {
    url: "http://www.mockUrl.com/3/configuration?api_key=123456", method: "GET"
  };

  beforeEach(function(){

    spyOn(API, 'getMovieDBConfig').and.callThrough();

    testConfigAPIResponse = API.getMovieDBConfig(mockSettings);

  });

  it('returns a promise', function() {
    expect(testConfigAPIResponse).toEqual(jasmine.any(Promise));
  });

  it('makes a call to RESTful API New Authentication Token', function() {
    expect(API.getMovieDBConfig).toHaveBeenCalledWith(mockSettings);
  });

  describe('API response on a status code 200', function() {
    var fakeServer, spyCallback;
    var testConfigXHRResponse;

    beforeEach(function() {

      var mockResponse = {
        "images": {
          "base_url": "http://image.tmdb.org/t/p/",
          "secure_base_url": "https://image.tmdb.org/t/p/",
          "backdrop_sizes": [
            "w300",
            "w780",
            "w1280",
            "original"
          ],
          "logo_sizes": [
            "w45",
            "w92",
            "w154",
            "w185",
            "w300",
            "w500",
            "original"
          ],
          "poster_sizes": [
            "w92",
            "w154",
            "w185",
            "w342",
            "w500",
            "w780",
            "original"
          ],
          "profile_sizes": [
            "w45",
            "w185",
            "h632",
            "original"
          ],
          "still_sizes": [
            "w92",
            "w185",
            "w300",
            "original"
          ]
        },
        "change_keys": [
          "adult",
          "air_date",
          "also_known_as",
          "alternative_titles",
          "biography",
          "birthday",
          "budget",
          "cast",
          "certifications",
          "character_names",
          "created_by",
          "crew",
          "deathday",
          "episode",
          "episode_number",
          "episode_run_time",
          "freebase_id",
          "freebase_mid",
          "general",
          "genres",
          "guest_stars",
          "homepage",
          "images",
          "imdb_id",
          "languages",
          "name",
          "network",
          "origin_country",
          "original_name",
          "original_title",
          "overview",
          "parts",
          "place_of_birth",
          "plot_keywords",
          "production_code",
          "production_companies",
          "production_countries",
          "releases",
          "revenue",
          "runtime",
          "season",
          "season_number",
          "season_regular",
          "spoken_languages",
          "status",
          "tagline",
          "title",
          "translations",
          "tvdb_id",
          "tvrage_id",
          "type",
          "video",
          "videos"
        ]
      };

      fakeServer = sinon.fakeServer.create();
      spyCallback = sinon.spy();

      fakeServer.respondWith(
        "GET",
        "http://www.mockUrl.com/3/configuration?api_key=123456",
        [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify(mockResponse)
        ]
      );
    });

    beforeEach(function() {
      testConfigXHRResponse = API.getMovieDBConfig(mockSettings);
    });

    afterEach(function() {

      fakeServer.respond();

      fakeServer.restore();

    });

    it('should return a url for images in the response', function(){
      testConfigXHRResponse.then(function(response){
        expect(response.images).toEqual(jasmine.objectContaining({
          "base_url": "http://image.tmdb.org/t/p/"
        }));
      });
    });
    // Test for error
  });

  describe('API response on a status code 401', function() {

    var fakeServer, spyCallback;
    var testSearchXHRErrResponse;

    beforeEach(function() {
      var mockResponse = {
        "status_code": 7,
        "status_message": "Invalid API key: You must be granted a valid key."
      }

      fakeServer = sinon.fakeServer.create();
      spyCallback = sinon.spy();

      fakeServer.respondWith(
        "GET",
        "http://www.mockUrl.com/3/configuration?api_key=123456",
        [
          401,
          {"Content-Type": "application/json"},
          JSON.stringify(mockResponse)
        ]
      );
    });

    beforeEach(function() {
      testSearchXHRErrResponse = API.getMovieDBConfig(mockSettings);
    });

    afterEach(function() {

      fakeServer.respond();

      fakeServer.restore();

    });

    it('should return a status code of 401', function() {
      testSearchXHRErrResponse.then(function(success) {}, function(error) {
        expect(error.status).toEqual(401);
      });
    });

    it('should return an appropriate error message', function(){
      testSearchXHRErrResponse.then(function(success) {}, function(error) {
        expect(error.errorResponse).toEqual(jasmine.objectContaining({
          "status_message": "Invalid API key: You must be granted a valid key."
        }));
      });
    });
  });
});
