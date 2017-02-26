var Movie = require('./Movie.js');

describe('Movie Model', function() {
  var testMovieData = {
    "poster_path": "/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg",
    "adult": true,
    "overview": "overview description",
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
  };

  var movieModel = new Movie(testMovieData);

  it('should contain a string property for poster_path', function(){
    expect(typeof movieModel['poster_path'] === 'string').toBe(true);
  });

  it('should contain a string value for poster_path', function(){
    expect(movieModel['poster_path']).toEqual(testMovieData['poster_path']);
  });

  it('should contain a boolean property for adult', function() {
    expect(typeof movieModel['adult'] === 'boolean').toBe(true);
  });

  it('should contain a boolean value for adult', function() {
    expect(movieModel['adult']).toBe(true);
  });

  it('should contain a string property for overview', function() {
    expect(typeof movieModel['overview'] === 'string').toBe(true);
  });

  it('should contain a string value for overview', function() {
    expect(movieModel['overview']).toEqual(testMovieData['overview']);
  });
  /* Could create a Date object */
  it('should contain a string property for release_date', function() {
    expect(typeof movieModel['release_date'] === 'string').toBe(true);
  });

  it('should contain a string value for release_date', function() {
    expect(movieModel['release_date']).toEqual(testMovieData['release_date']);
  });

  it('should contain a Array property for genre_ids', function() {
    expect(Array.isArray(movieModel['genre_ids'])).toBe(true);
  });

  it('should contain a array value for genre_ids', function() {
    expect(movieModel['genre_ids']).toEqual(testMovieData['genre_ids']);
  });

  it('should contain a number property for id', function() {
    expect(Number.isInteger(movieModel['id'])).toBe(true);
  });

  it('should contain a number value for id', function() {
    expect(movieModel['id']).toEqual(testMovieData['id']);
  });

  it('should contain a string property for original_title', function() {
    expect(typeof movieModel['original_title'] === 'string').toBe(true);
  });

  it('should contain a string value for original_title', function() {
    expect(movieModel['original_title']).toEqual(testMovieData['original_title']);
  });

  it('should contain a string property for original_language', function() {
    expect(typeof movieModel['original_language'] === 'string').toBe(true);
  });

  it('should contain a string value for original_language', function() {
    expect(movieModel['original_language']).toEqual(testMovieData['original_language']);
  });

  it('should contain a string property for title', function() {
    expect(typeof movieModel['title'] === 'string').toBe(true);
  });

  it('should contain a string value for title', function() {
    expect(movieModel['title']).toEqual(testMovieData['title']);
  });

  it('should contain a string property for backdrop_path', function() {
    expect(typeof movieModel['backdrop_path'] === 'string').toBe(true);
  });

  it('should contain a string value for backdrop_path', function() {
    expect(movieModel['backdrop_path']).toEqual(testMovieData['backdrop_path']);
  });

  it('should contain a number property for popularity', function() {
    expect(typeof movieModel['popularity'] === 'number').toBe(true);
  });

  it('should contain a number value for popularity', function() {
    expect(movieModel['popularity']).toEqual(testMovieData['popularity']);
  });

  it('should contain a number property for vote_count', function() {
    expect(typeof movieModel['vote_count'] === 'number').toBe(true);
  });

  it('should contain a number value for vote_count', function() {
    expect(movieModel['vote_count']).toEqual(testMovieData['vote_count']);
  });

  it('should contain a boolean property for video', function() {
    expect(typeof movieModel['video'] === 'boolean').toBe(true);
  });

  it('should contain a boolean value for video', function() {
    expect(movieModel['video']).toEqual(testMovieData['video']);
  });

  it('should contain a number property for vote_average', function() {
    expect(typeof movieModel['vote_average'] === 'number').toBe(true);
  });

  it('should contain a number value for vote_average', function() {
    expect(movieModel['vote_average']).toEqual(testMovieData['vote_average']);
  });
});
