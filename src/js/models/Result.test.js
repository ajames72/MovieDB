var Result = require('./Result.js');
var Movie = require('./Movie.js');

describe('Result Model', function() {
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

  it('should contain a number property for page', function(){
    expect(typeof resultModel['page'] === 'number').toBe(true);
  });

  it('should contain a number value for poster_path', function(){
    expect(resultModel['page']).toEqual(testResultData['page']);
  });

  it('should contain a Array property for results', function() {
    expect(Array.isArray(resultModel['results'])).toBe(true);
  });

  it('should contain a array of Movies for results', function() {
    for(movie in resultModel['results']) {
      expect(movie instanceof Movie);
    }
  });

  it('should contain a number property for total_results', function(){
    expect(typeof resultModel['total_results'] === 'number').toBe(true);
  });

  it('should contain a number value for total_results', function(){
    expect(resultModel['total_results']).toEqual(testResultData['total_results']);
  });

  it('should contain a number property for total_pages', function(){
    expect(typeof resultModel['total_pages'] === 'number').toBe(true);
  });

  it('should contain a number value for total_pages', function(){
    expect(resultModel['total_pages']).toEqual(testResultData['total_pages']);
  });
});
