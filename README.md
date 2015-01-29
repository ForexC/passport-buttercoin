# Passport-Buttercoin

[Passport](http://passportjs.org/) strategy for authenticating with [Buttercoin](https://buttercoin.com/) using the OAuth 2.0 API.

This module lets you authenticate using Buttercoin in your Node.js applications.
By plugging into Passport, Buttercoin authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-buttercoin

## Usage

#### Configure Strategy

The Buttercoin authentication strategy authenticates users using a Buttercoin account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new ButtercoinStrategy({
        clientID: BUTTERCOIN_CLIENT_ID,
        clientSecret: BUTTERCOIN_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/buttercoin/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        // ...
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'buttercoin'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/buttercoin',
      passport.authenticate('buttercoin'));

    app.get('/auth/buttercoin/callback',
      passport.authenticate('buttercoin', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/buttercoin/passport-buttercoin/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/buttercoin/passport-buttercoin.png)](http://travis-ci.org/buttercoin/passport-buttercoin)

## Credits

  - [Bennett Hoffman](http://github.com/revcbh)
  - [Jared Hanson](http://github.com/jaredhanson) (passport-github)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2015 Buttercoin <[http://buttercoin.com/](http://buttercoin.com/)>, Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
