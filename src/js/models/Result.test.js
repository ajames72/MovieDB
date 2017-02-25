var Result = require('./Result.js');

describe('Result Model', function() {
  var testResultData = {
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

  var resultModel = new Result(testResultData);

  it('should contain a string property for poster_path', function(){
    expect(typeof resultModel['poster_path'] === 'string').toBe(true);
  });

  it('should contain a string value for poster_path', function(){
    expect(resultModel['poster_path']).toEqual(testResultData['poster_path']);
  });

  it('should contain a boolean property for adult', function() {
    expect(typeof resultModel['adult'] === 'boolean').toBe(true);
  });

  it('should contain a boolean value for adult', function() {
    expect(resultModel['adult']).toBe(true);
  });

  it('should contain a string property for overview', function() {
    expect(typeof resultModel['overview'] === 'string').toBe(true);
  });

  it('should contain a string value for overview', function() {
    expect(resultModel['overview']).toEqual(testResultData['overview']);
  });
  /* Could create a Date object */
  it('should contain a string property for release_date', function() {
    expect(typeof resultModel['release_date'] === 'string').toBe(true);
  });

  it('should contain a string value for release_date', function() {
    expect(resultModel['release_date']).toEqual(testResultData['release_date']);
  });

  it('should contain a Array property for genre_ids', function() {
    expect(Array.isArray(resultModel['genre_ids'])).toBe(true);
  });

  it('should contain a array value for genre_ids', function() {
    expect(resultModel['genre_ids']).toEqual(testResultData['genre_ids']);
  });

  it('should contain a number property for id', function() {
    expect(Number.isInteger(resultModel['id'])).toBe(true);
  });

  it('should contain a number value for id', function() {
    expect(resultModel['id']).toEqual(testResultData['id']);
  });

  it('should contain a string property for original_title', function() {
    expect(typeof resultModel['original_title'] === 'string').toBe(true);
  });

  it('should contain a string value for original_title', function() {
    expect(resultModel['original_title']).toEqual(testResultData['original_title']);
  });

  it('should contain a string property for original_language', function() {
    expect(typeof resultModel['original_language'] === 'string').toBe(true);
  });

  it('should contain a string value for original_language', function() {
    expect(resultModel['original_language']).toEqual(testResultData['original_language']);
  });

  it('should contain a string property for title', function() {
    expect(typeof resultModel['title'] === 'string').toBe(true);
  });

  it('should contain a string value for title', function() {
    expect(resultModel['title']).toEqual(testResultData['title']);
  });

  it('should contain a string property for backdrop_path', function() {
    expect(typeof resultModel['backdrop_path'] === 'string').toBe(true);
  });

  it('should contain a string value for backdrop_path', function() {
    expect(resultModel['backdrop_path']).toEqual(testResultData['backdrop_path']);
  });

  it('should contain a number property for popularity', function() {
    expect(typeof resultModel['popularity'] === 'number').toBe(true);
  });

  it('should contain a number value for popularity', function() {
    expect(resultModel['popularity']).toEqual(testResultData['popularity']);
  });

  it('should contain a number property for vote_count', function() {
    expect(typeof resultModel['vote_count'] === 'number').toBe(true);
  });

  it('should contain a number value for vote_count', function() {
    expect(resultModel['vote_count']).toEqual(testResultData['vote_count']);
  });

  it('should contain a boolean property for video', function() {
    expect(typeof resultModel['video'] === 'boolean').toBe(true);
  });

  it('should contain a boolean value for video', function() {
    expect(resultModel['video']).toEqual(testResultData['video']);
  });

  it('should contain a number property for vote_average', function() {
    expect(typeof resultModel['vote_average'] === 'number').toBe(true);
  });

  it('should contain a number value for vote_average', function() {
    expect(resultModel['vote_average']).toEqual(testResultData['vote_average']);
  });
});
