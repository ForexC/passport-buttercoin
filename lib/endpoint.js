function Endpoint(endpoint) {
  this.endpoint = endpoint;
  this.authorizationURL = endpoint + '/oauth2';
  this.tokenURL = endpoint + '/oauth2/token';
  this.userProfileURL = endpoint + '/v1/account/depositAddress'; // TODO - actual profile
  // TODO - revokeURL
}

Endpoint.production = new Endpoint('https://buttercoin.com');

Endpoint.sandbox = new Endpoint('https://www-sandbox.buttercoin.com');
Endpoint.sandbox.userProfileURL = 'https://sandbox.buttercoin.com/v1/account/depositAddress';

module.exports = Endpoint;
