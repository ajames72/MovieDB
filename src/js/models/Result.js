var Result = function(data) {
  this.poster_path = "";
  this.adult = false;
  this.overview = "";
  this.release_date = "";
  this.genre_ids = [];
  this.id = "";
  this.original_title = "";
  this.original_language = "";
  this.title = "";
  this.backdrop_path = "";
  this.popularity = 0;
  this.vote_count = 0;
  this.video = false;
  this.vote_average = 0;
  
  for(key in data) {
    if(this.hasOwnProperty(key)) {
      this[key] = data[key];
    }
  }
}

module.exports = Result;
