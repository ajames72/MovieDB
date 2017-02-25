var Config = require('./config.js');

describe('The RESTful API Config', function() {
  it('should get the API for the new authentication token', function() {
    expect(Config.getNewAuthenticationTokenAPI().url)
      .toEqual("https://api.themoviedb.org/3/authentication/token/new?api_key=df3908a9e93ea4fa095429a46c0eec66");
  });

  it('should use the GET method for the new authentication token RESTful API', function() {
    expect(Config.getNewAuthenticationTokenAPI().method).toEqual('GET');
  });

  it('should get the search RESTful API', function() {
    expect(Config.getSearchAPI().url)
      .toEqual("https://api.themoviedb.org/3/search/movie?api_key=df3908a9e93ea4fa095429a46c0eec66&query=");
  });

  it('should use the GET method for the search RESTful API', function() {
    expect(Config.getSearchAPI().method).toEqual('GET');
  });
});
