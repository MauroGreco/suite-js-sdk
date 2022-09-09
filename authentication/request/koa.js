'use strict';

var logger = require('logentries-logformat')('suite-sdk');
var RequestAuthenticator = require('./request-authenticator');

module.exports.getMiddleware = function(escherConfig) {
  return async function(next) {
    try {
      RequestAuthenticator.create(escherConfig, this).authenticate();
    } catch (ex) {
      logger.error('authentication_request_error', ex.message, ex);
      this.throw(401, ex.message);
    }
    if (next) {
      const result = await next();

      if (next.constructor.name === 'GeneratorFunction') {
        result.next();
      }
    }
  };
};
