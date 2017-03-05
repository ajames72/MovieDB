/**
 * @file Results Template
 * @description Object to manage the display of the search results
 * @author Andrew James
 * @version 0.1
 */

"use strict";

var Config = require('../api/Config.js');

var ResultsTemplate = {
  /**
   * @description helper function to generate HTMLElement objects
   * @param {string} nodeName - the HTMLElement name
   * @param {object} attributes - key value pair element attributes
   * @returns {HTMLElement}
   **/
  createHTMLElement: function(nodeName, attributes) {

    var newElement = document.createElement(nodeName);

    if((attributes !== null) && (typeof attributes === 'object')) {
      //Set attributes
      for(var key in attributes) {
        if((key === 'className') || (key === 'class')) {
          newElement.className = attributes[key];
        } else if((key === 'style') && (typeof attributes['style'] === 'object')) {
          //Loop through style key/values
          var styles = attributes['style'];

          for(style in styles) {
            newElement.style[style] = styles[style];
          }
        } else {
          newElement.setAttribute(key, attributes[key]);
        }

      }
    }

    return newElement;
  },
  /**
   * @description creates the results wrapper DIV element
   * @param none
   * @returns {HTMLElement}
   **/
  createRootElement: function() {

    return ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-result",
      id: "tmdb-result"
    });

  },
  /**
   * @description creates a movie display DIV element
   * @param {Movie} movie - movie data
   * @returns {HTMLElement}
   **/
  createMovieElement: function(movie) {
    var movieWrapperCell = ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-movie"
    });

    movieWrapperCell.appendChild(ResultsTemplate.createMovieImageElement(movie['poster_path'], movie['original_title']));

    var movieDescription = ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-movie__description"
    });

    movieWrapperCell.appendChild(movieDescription);

    return movieWrapperCell;
  },
  /**
   * @description creates the movie img element and DIV wrapper
   * @param {string} posterPath - the path for the poster image taken from Movie.poster_path
   * @param {string} altText - movie img alt text taken from Movie.original_title
   * @returns {HTMLElement}
   **/
  createMovieImageElement: function(posterPath, altText) {
    //We could do lazy loading of the image,
    //check the image properties as it's loaded for height,
    //width & orientation to determine best presentation
    //but for now, just set the image path.

    var movieImage = ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-movie__image"
    });

    //Do a test here to check the config has been loaded.
    var imgBasePath = Config.TMDbConfiguration.images.base_url;
    var movieImgElement = ResultsTemplate.createHTMLElement('img', {
      src: imgBasePath.concat(Config.TMDbConfiguration.images.poster_sizes[0], posterPath),
      alt: altText
    });

    movieImage.appendChild(movieImgElement);

    return movieImage;
  },
  createLanguageOptionElement: function(languages) {
    var selectElement = ResultsTemplate.createHTMLElement('select', {
      name: "tmdb-search-option-language",
      id: "tmdb-search-option-language",
      class: "tmdb-search-option"
    });

    var defaultOption = ResultsTemplate.createHTMLElement('option', {
      value: "any",
      selected: "true"
    });

    defaultOption.textContent = "any";

    selectElement.appendChild(defaultOption);

    for(var i in languages) {
      var option = ResultsTemplate.createHTMLElement('option', {
        value: languages[i].alpha2,
      });

      option.textContent = languages[i].English;

      selectElement.appendChild(option);
    }

    return selectElement;
  },
  createRegionOptionElement: function(regions) {
    var selectElement = ResultsTemplate.createHTMLElement('select', {
      name: "tmdb-search-option-region",
      id: "tmdb-search-option-region",
      class: "tmdb-search-option"
    });

    var defaultOption = ResultsTemplate.createHTMLElement('option', {
      value: "any",
      selected: "true"
    });

    defaultOption.textContent = "any";

    selectElement.appendChild(defaultOption);

    for(var i in regions) {
      var option = ResultsTemplate.createHTMLElement('option', {
        value: regions[i].Code,
      });

      option.textContent = regions[i].Name;

      selectElement.appendChild(option);
    }

    return selectElement;
  }
}

module.exports = ResultsTemplate;
