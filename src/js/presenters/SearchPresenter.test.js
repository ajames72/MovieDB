var Config = require('../api/Config.js');
var API = require('../api/API.js');
var Result = require('../models/Result.js');
var SearchPresenter = require('./SearchPresenter.js');

describe('SearchPresenter', function() {

  var testConfiguartionAPIResponse;

  beforeEach(function() {
    // Set up mock document body
    var inputForm = '<div id="app">' +
      '<div class="moviedb-search-box-wrapper">' +
        '<div class="moviedb-search-input">' +
          '<input type="text" name="searchbox" id="searchbox" value="Star Wars" />' +
        '</div>' +
        '<div class="moviedb-search-submit">' +
          '<button type="submit" name="submit" id="submit" value="Search">Search</button>' +
        '</div>' +
      '</div>' +
      '<div class="tmdb-search-options">' +
        '<div class="tmdb-option">' +
          '<div class="tmdb-option__field">' +
            '<input type="checkbox" class="tmdb-search-option" id="tmdb-search-option-adult" name="tmdb-search-option-adult" checked="true" />' +
          '</div>' +
          '<div class="tmdb-option__field" id="langOpts">' +
          '<select name="tmdb-search-option-language" id="tmdb-search-option-language" class="tmdb-search-option">' +
            '<option value="any">any</option>' +
            '<option value="aa" selected="true">Afar</option>' +
            '<option value="ab">Abkhazian</option>' +
            '<option value="ae">Avestan</option>' +
            '<option value="af">Afrikaans</option>' +
            '<option value="ak">Akan</option>' +
          '</select>' +
          '</div>' +
          '<div class="tmdb-option__field" id="regionOpts">' +
          '<select name="tmdb-search-option-region" id="tmdb-search-option-region" class="tmdb-search-option">' +
            '<option value="any">any</option>' +
            '<option value="AF">Afghanistan</option>' +
            '<option value="AX">Åland Islands</option>' +
            '<option value="AL">Albania</option>' +
            '<option value="DZ">Algeria</option>' +
            '<option value="AS" selected="true">American Samoa</option>' +
          '</select>' +
          '</div>' +
          '<div class="tmdb-option__field">' +
            '<input type="number" class="tmdb-search-option" id="tmdb-search-option-year" name="tmdb-search-option-year" max="2017" value="2000" />' +
          '</div>' +
          '<div class="tmdb-option__field">' +
            '<input type="number" class="tmdb-search-option" id="tmdb-search-option-primary" name="tmdb-search-option-primary" max="2017" value="2000" />' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="tmdb-result" id="tmdb-result">' +
        '<div class="tmdb-movie">' +
          '<div class="tmdb-movie__image"><img src="http://image.tmdb.org/t/p/w92/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg" alt="Star Wars"></div>' +
          '<div class="tmdb-movie__description"></div>' +
        '</div>' +
        '<div class="tmdb-movie">' +
          '<div class="tmdb-movie__image"><img src="http://image.tmdb.org/t/p/w92/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg" alt="Star Wars: The Force Awakens"></div>' +
          '<div class="tmdb-movie__description"></div>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      inputForm);
  });

  beforeEach(function() {
    // Set up mock configuration response
    var mockPromise = new Promise(function(resolve, reject){
      promiseHelper = {
        resolve: resolve,
        reject: reject
      };
    });

    spyOn(API, 'getMovieDBConfig').and.returnValue(mockPromise);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('app'));
  });

  it('should initialise', function() {
    expect(SearchPresenter.initialise()).toBeTruthy();
  });

  describe('initialisation process', function() {

    beforeEach(function() {
      SearchPresenter.initialise();
    });

    it('should get the Movie Database configuation', function() {
      expect(API.getMovieDBConfig).toHaveBeenCalledWith(Config.getTMDBConfigurationAPI());
    });

    it('should set a reference to the input field', function() {
      expect(SearchPresenter.inputField).toBeDefined();
    });

    it('should set a reference to the submit button', function() {
      expect(SearchPresenter.submitButton).toBeDefined();
    });
  });

  describe('submission process', function() {

    var testSubmit;
    var mockSettings = {
      url: "http://www.mockUrl.com/3/search/movie?api_key=123456&query=", method: "GET"
    };
    var searchTerm = "Search Term";
    var testSearchAPIResponse;

    beforeEach(function() {
      var mockPromise = new Promise(function(resolve, reject){
        promiseHelper = {
          resolve: resolve,
          reject: reject
        };
      });

      spyOn(API, 'searchMovieDB').and.returnValue(mockPromise);
    });

    beforeEach(function() {
      SearchPresenter.initialise();

      spyOn(SearchPresenter, 'submit').and.callThrough();

      testSubmit = SearchPresenter.submit(null, searchTerm);
    });

    it('should return a promise', function() {
      expect(testSubmit).toEqual(jasmine.any(Promise));
    });

    describe('search options', function() {

      var options;

      beforeEach(function() {
        options = SearchPresenter.getSearchOptions();
      });

      it('should set the include_adult option', function() {
        expect(options.include_adult).toEqual('&include_adult=true');
      });

      it('should set the language option', function() {
        expect(options.language).toEqual('&language=aa');
      });

      it('should set the region option', function() {
        expect(options.region).toEqual('&region=AS');
      });

      it('should set the year option', function() {
        expect(options.year).toEqual('&year=2000');
      });

      it('should set the primary_release_year', function() {
        expect(options.primary_release_year).toEqual('&primary_release_year=2000');
      });

      it('should create the parameter string', function() {
        expect(SearchPresenter.getSearchParameters())
        .toEqual('Star%20Wars&include_adult=true&language=aa&region=AS&year=2000&primary_release_year=2000');
      });
    });

    describe('on a successful request', function() {
      beforeEach(function() {
        var mockResponse =
        {
          "page": 1,
          "results": [],
          "total_results": 0,
          "total_pages": 0
        };

        promiseHelper.resolve(mockResponse);
      });

      it('should return a list of results', function(done){

        testSubmit.then(function(response){
          expect(response instanceof Result).toBeTruthy();
          done();
        });

      });
    });

    describe('on an empty field submission', function() {
      beforeEach(function() {
        var mockResponse =
        {
          "errors": [
            "query must be provided"
          ]
        };

        promiseHelper.resolve(422, mockResponse);
      });

      it('should respond to an empty field', function() {
        testSubmit.then(function() {}, function(err, failureMessage){
          expect(err).toBe(422);
          expect(failureMessage.errors[0]).toEqual("query must be provided");
          done();
        });
      });

    });
  });

  describe('reset', function() {
    it('should remove the results from the UI', function() {
      SearchPresenter.removeResults();
      expect(document.getElementById('tmdb-result')).toBeFalsy();
    });
  });
});
