var Config = require('./config.js');

describe('The API Config', function(){
  it('should get the API for the new authentication token', function(){
    expect(Config.getNewAuthenticationTokenAPI().url)
      .toEqual("https://api.themoviedb.org/3/authentication/token/new?api_key=df3908a9e93ea4fa095429a46c0eec66");
  });
});
