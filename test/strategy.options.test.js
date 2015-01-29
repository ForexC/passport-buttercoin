/* global describe, it, expect, before */
/* jshint expr: true */

var ButtercoinStrategy = require('../lib/strategy');

describe('Strategy#userProfile', function() {

  describe('loading profile using custom URL', function() {
    var strategy = new ButtercoinStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        userProfileURL: 'https://github.corpDomain/api/v3/user'
      },
      function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://github.corpDomain/api/v3/user') { return callback(new Error('wrong url argument')); }
      if (accessToken != 'token') { return callback(new Error('wrong token argument')); }

      var body = '{ "hashedAccountId": "test-id-hash" }';

      callback(null, body, undefined);
    };


    var profile;

    before(function(done) {
      strategy.userProfile('token', function(err, p) {
        if (err) { return done(err); }
        profile = p;
        done();
      });
    });

    it('should parse profile', function() {
      expect(profile.provider).to.equal('buttercoin');

      expect(profile.hashedAccountId).to.equal('test-id-hash');
    });

    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });

    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });

});
