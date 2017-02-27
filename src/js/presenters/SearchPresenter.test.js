var API = require('../api/API.js');
var Result = require('../models/Result.js');
var SearchPresenter = require('./SearchPresenter.js');

describe('SearchPresenter', function() {
  beforeEach(function() {
    var inputForm = '<div id="app">' +
      '<div class="moviedb-search-box-wrapper">' +
        '<div class="moviedb-search-input">' +
          '<input type="text" name="searchbox" id="searchbox" value="Star Wars" />' +
        '</div>' +
        '<div class="moviedb-search-submit">' +
          '<button type="submit" name="submit" id="submit" value="Search">Search</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      inputForm);


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

    it('should get the value from the input field', function() {
      expect(SearchPresenter.getSearchTerm()).toEqual("Star Wars");
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

});
