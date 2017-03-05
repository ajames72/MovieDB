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

  it('should get the configuration RESTful API', function() {
    expect(Config.getTMDBConfigurationAPI().url)
      .toEqual("https://api.themoviedb.org/3/configuration?api_key=df3908a9e93ea4fa095429a46c0eec66");
  });

  it('should use the GET method for the configuration RESTful API', function() {
    expect(Config.getTMDBConfigurationAPI().method).toEqual('GET');
  });

  it('should get the configuration for ISO639_1 codes', function() {
    expect(Config.getISO639_1CodeSrc().url)
      .toEqual("http://data.okfn.org/data/core/language-codes/r/language-codes.json");
  });

  it('should use the GET method for the configuration ISO639_1 codes', function() {
    expect(Config.getISO639_1CodeSrc().method).toEqual('GET');
  });

  it('should get the configuration ISO3166_1 codes', function() {
    expect(Config.getISO3166_1CodeSrc().url)
      .toEqual("http://data.okfn.org/data/core/country-list/r/data.json");
  });

  it('should use the GET method for the configuration ISO3166_1 codes', function() {
    expect(Config.getISO3166_1CodeSrc().method).toEqual('GET');
  });
});
