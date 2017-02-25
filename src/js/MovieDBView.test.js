var MovieDBView = require('./MovieDBView.js');

describe('Our View', () => {

  //var movieDBView = new MovieDBView();

  beforeEach(function(){
    var inputForm = '<div id="app">' +
      '<div class="moviedb-search-box-wrapper">' +
        '<div class="moviedb-search-input">' +
          '<input type="text" name="searchbox" id="searchbox" />' +
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

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should find the submit button', function(){
    var button = document.getElementById('submit');
    expect(button).toBeDefined();
  });

  it('should create the button event listener', function(){
    expect(MovieDBView.createEventListener()).toBe(true);
  });

});
