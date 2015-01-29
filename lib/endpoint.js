function Endpoint(endpoint) {
  this.endpoint = endpoint;
  this.authorizationURL = endpoint + '/auth';
  this.tokenURL = endpoint + '/token';
  // TODO - revokeURL
}

Endpoint.production = new Endpoint('https://buttercoin.com/oauth');
Endpoint.sandbox = new Endpoint('https://www-sandbox.buttercoin.com/oauth');


module.exports = Endpoint;
