var Config = require('../api/Config.js');

var ResultsTemplate = {
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
  createRootElement: function() {

    return ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-result"
    });

  },
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
  }
}

module.exports = ResultsTemplate;
