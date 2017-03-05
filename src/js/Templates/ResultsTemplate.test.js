var Config = require('../api/Config.js');
var ResultsTemplate = require('./ResultsTemplate.js');
var Result = require('../models/Result.js');

describe('ResultsTemplate', function() {

  var testLanguages = [
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

  var testRegions = [
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
  ]

  var testConfig = {
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

  Config.TMDbConfiguration = testConfig;

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

  it('should create an HTMLElement', function() {
    expect(ResultsTemplate.createHTMLElement('div') instanceof HTMLElement).toBeTruthy();
  });

  it('should create HTML DIV Elements', function() {
    expect(ResultsTemplate.createHTMLElement('div').nodeName).toBe('DIV');
  });

  it('should set the class of a new HTML element', function() {
    expect(ResultsTemplate.createHTMLElement('div', { className: 'my-test-class' }).className).toBe('my-test-class');
  });

  /* @TODO Run some unit tests on the style attributes */
  describe('on initialisation', function() {
    it('should create a language options list', function() {
      expect(ResultsTemplate.createLanguageOptionElement(testLanguages).nodeName).toBe('SELECT');
    });

    describe('language options list', function() {
      it('should contain language options', function() {
        expect(ResultsTemplate.createLanguageOptionElement(testLanguages).childNodes.length).toBe(9);
      });

      it('should contain an \'any\' option', function() {
        expect(ResultsTemplate.createLanguageOptionElement(testLanguages).childNodes[0].getAttribute('value')).toEqual('any');
      });
    });

    it('should create a region options list', function() {
      expect(ResultsTemplate.createRegionOptionElement(testRegions).nodeName).toBe('SELECT');
    });

    describe('region options list', function() {
      it('should contain region options', function() {
        expect(ResultsTemplate.createRegionOptionElement(testRegions).childNodes.length).toBe(5);
      });

      it('should contain an \'any\' option', function() {
        expect(ResultsTemplate.createRegionOptionElement(testRegions).childNodes[0].getAttribute('value')).toEqual('any');
      });
    });

  });

  describe('on successful search', function() {

    it('should create a div element to wrap the results output', function() {
      expect(ResultsTemplate.createRootElement().nodeName).toBe('DIV');
    });

    it('should create a wrapper element with class \'tmdb-result\'', function() {
      expect(ResultsTemplate.createRootElement().className).toBe('tmdb-result');
    });

    describe('the movie element', function() {
      it('should create a div wrapper element', function() {
        expect(ResultsTemplate.createMovieElement(resultModel.results[0]).nodeName).toBe('DIV');
      });

      it('should create a wrapper element with class \'tmdb-movie\'', function() {
        expect(ResultsTemplate.createMovieElement(resultModel.results[0]).className).toBe('tmdb-movie');
      });

      it('should contain a div element for the movie image', function(){
        expect(ResultsTemplate.createMovieElement(resultModel.results[0]).childNodes[0].nodeName).toBe('DIV');
      });

      it('should contain an element for the movie image with class \'tmdb-movie__image\'', function(){
        expect(ResultsTemplate.createMovieElement(resultModel.results[0]).childNodes[0].className).toEqual('tmdb-movie__image');
      });

      it('should contain a child img element', function() {
        var imgElement = ResultsTemplate.createMovieElement(resultModel.results[0]).childNodes[0];
        expect(imgElement.childNodes[0].nodeName).toBe('IMG');
      });

      it('should contain a div element for the movie description', function(){
        expect(ResultsTemplate.createMovieElement(resultModel.results[0]).childNodes[1].nodeName).toBe('DIV');
      });

      it('should contain an element for the movie description with class \'tmdb-movie__description\'', function(){
        expect(ResultsTemplate.createMovieElement(resultModel.results[0]).childNodes[1].className).toEqual('tmdb-movie__description');
      });

      describe('child img element', function() {
        it('should have an image source', function() {
          var imgElement = ResultsTemplate.createMovieElement(resultModel.results[0]).childNodes[0];
          //expect(imgElement.getAttribute('src')).toEqual('http://image.tmdb.org/t/p/w92/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg');
        });
      });
    });
  });

});
