var ResultsTemplate = require('./ResultsTemplate.js');
var Result = require('../models/Result.js');

describe('ResultsTemplate', function() {
  var testResultData = {
    "page": 1,
    "results": [
      {
        "poster_path": "/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg",
        "adult": false,
        "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        "release_date": "1977-05-25",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 11,
        "original_title": "Star Wars",
        "original_language": "en",
        "title": "Star Wars",
        "backdrop_path": "/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
        "popularity": 16.619988,
        "vote_count": 4958,
        "video": false,
        "vote_average": 8
      },
      {
        "poster_path": "/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
        "adult": false,
        "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
        "release_date": "2015-12-15",
        "genre_ids": [
          28,
          12,
          878,
          14
        ],
        "id": 140607,
        "original_title": "Star Wars: The Force Awakens",
        "original_language": "en",
        "title": "Star Wars: The Force Awakens",
        "backdrop_path": "/njv65RTipNSTozFLuF85jL0bcQe.jpg",
        "popularity": 14.360674,
        "vote_count": 5796,
        "video": false,
        "vote_average": 7.5
      },
      {
        "poster_path": "/fntcKx0aAvgfUs2dbVzQD7VEZ09.jpg",
        "adult": false,
        "overview": "Having taken her first steps into a larger world in Star Wars: The Force Awakens (2015), Rey continues her epic journey with Finn, Poe and Luke Skywalker in the next chapter of the saga.",
        "release_date": "2017-12-13",
        "genre_ids": [
          28,
          12,
          14,
          878
        ],
        "id": 181808,
        "original_title": "Star Wars: The Last Jedi",
        "original_language": "en",
        "title": "Star Wars: The Last Jedi",
        "backdrop_path": "/m5YrALhx4I8c0Lnu2Gq9W8aeC4.jpg",
        "popularity": 8.126151,
        "vote_count": 62,
        "video": false,
        "vote_average": 0
      }
    ],
    "total_results": 3,
    "total_pages": 1
  };

  var resultModel = new Result(testResultData);

  it('should create HTML DIV Elements', function() {
    expect(ResultsTemplate.createHTMLElement('div').nodeName).toBe('DIV');
  });

  it('should set the class of a new HTML element', function() {
    expect(ResultsTemplate.createHTMLElement('div', { className: 'my-test-class' }).className).toBe('my-test-class');
  });

  describe('on successful search', function() {
    
    it('should create a div element to wrap the results output', function() {
      expect(ResultsTemplate.createRootElement(resultModel).nodeName).toBe('DIV');
    });

    describe('the movie element', function() {
      it('should create a div wrapper element', function() {
        expect(ResultsTemplate.createMovieElement(testResultData.results[0]).nodeName).toBe('DIV');
      });

      it('should create a wrapper element with class \'tmdb-movie-wrapper\'', function() {
        expect(ResultsTemplate.createMovieElement(testResultData.results[0]).className).toBe('tmdb-movie-wrapper');
      });

      it('should contain a div element for the movie image', function(){
        expect(ResultsTemplate.createMovieElement(testResultData.results[0]).childNodes[0].nodeName).toBe('DIV');
      });

      it('should contain an element for the movie image with class \'tmbd-movie-image\'', function(){
        expect(ResultsTemplate.createMovieElement(testResultData.results[0]).childNodes[0].className).toEqual('tmbd-movie-image');
      });

      it('should contain a div element for the movie description', function(){
        expect(ResultsTemplate.createMovieElement(testResultData.results[0]).childNodes[1].nodeName).toBe('DIV');
      });

      it('should contain an element for the movie description with class \'tmbd-movie-description\'', function(){
        expect(ResultsTemplate.createMovieElement(testResultData.results[0]).childNodes[1].className).toEqual('tmbd-movie-description');
      });
    });
  });
});
