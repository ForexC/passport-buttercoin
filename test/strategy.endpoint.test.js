/* global describe, it, expect */
/* jshint expr: true */

var ButtercoinStrategy = require('..');
var Endpoint = require('..').Endpoint;

describe('Strategy#Endpoint', function() {
  it('should have defaults for production and sandbox', function() {
    expect(Endpoint.production).to.be.an('object');
    expect(Endpoint.production.endpoint).to.equal('https://buttercoin.com');

    expect(Endpoint.sandbox).to.be.an('object');
    expect(Endpoint.sandbox.endpoint).to.equal('https://www-sandbox.buttercoin.com');
  });

  it('should be able to use a custom endpoint', function() {
    var endpoint = 'http://localhost:8080/OA2';
    var dev = new Endpoint(endpoint);
    expect(dev).to.be.an('object');
    expect(dev.endpoint).to.equal(endpoint);
    expect(dev.authorizationURL).to.equal(endpoint + '/oauth2/auth');
    expect(dev.tokenURL).to.equal(endpoint + '/oauth2/token');
    expect(dev.userProfileURL).to.equal(endpoint + '/v1/account/depositAddress');

    var strategy = new ButtercoinStrategy({
      clientID: 'fake',
      clientSecret: 'fake',
      endpoint: dev
    }, function() {});

    expect(strategy._oauth2._authorizeUrl).to.equal(endpoint + '/oauth2/auth');
    expect(strategy._oauth2._accessTokenUrl).to.equal(endpoint + '/oauth2/token');

    strategy = new ButtercoinStrategy({
      clientID: 'fake',
      clientSecret: 'fake',
      endpoint: 'http://localhost:8080/OA2'
    }, function() {});

    expect(strategy._oauth2._authorizeUrl).to.equal(endpoint + '/oauth2/auth');
    expect(strategy._oauth2._accessTokenUrl).to.equal(endpoint + '/oauth2/token');
  });

  it('should default to sandbox if no endpoint is specified', function() {
    var strategy = new ButtercoinStrategy({
      clientID: 'fake',
      clientSecret: 'fake'
    }, function() {});

    expect(strategy._oauth2._authorizeUrl).to.equal(Endpoint.sandbox.authorizationURL);
    expect(strategy._oauth2._accessTokenUrl).to.equal(Endpoint.sandbox.tokenURL);
  });
});
