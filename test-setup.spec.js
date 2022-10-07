'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-subset'));
chai.use(require('sinon-chai'));

global.expect = chai.expect;
global.sinon = require('sinon');

afterEach(function() {
  global.sinon.restore();
});
