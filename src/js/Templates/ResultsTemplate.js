var ResultsTemplate = {
  createHTMLElement: function(nodeName, attributes) {
    var newElement = document.createElement(nodeName);

    if((attributes !== null) && (typeof attributes === 'object')) {
      //Set attributes
      for(var key in attributes) {
        if((key === 'className') || (key === 'class')) {
          newElement.className = attributes[key];
        } else {
          newElement.setAttribute(key, attributes[key]);
        }

      }
    }

    return newElement;
  },
  createRootElement: function(resultModel) {

    return ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-result-wrapper"
    });

  },
  createMovieElement: function(movie) {
    var movieWrapperCell = ResultsTemplate.createHTMLElement('div', {
      className: "tmdb-movie-wrapper"
    });

    var movieImage = ResultsTemplate.createHTMLElement('div', {
      className: "tmbd-movie-image"
    });

    movieWrapperCell.appendChild(movieImage);

    var movieDescription = ResultsTemplate.createHTMLElement('div', {
      className: "tmbd-movie-description"
    });

    movieWrapperCell.appendChild(movieDescription);

    return movieWrapperCell;
  }
}

module.exports = ResultsTemplate;
