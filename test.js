/*!
 * helper-codelinks <https://github.com/helpers/helper-codelinks>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var fs = require('fs');
var assert = require('assert');
var should = require('should');
var codelinks = require('./');

function read(name) {
  return fs.readFileSync(name, 'utf8');
}

describe('codelinks', function () {
  it('should generate links for the given directory:', function () {
    codelinks()('fixtures/').should.equal(read('actual/codelinks.md'));
  });

  it('should support filtering with glob patterns:', function () {
    codelinks()('fixtures/', {filter: '!**/two.js'}).should.equal(read('actual/filtered.md'));
  });

  it('should throw an error when the first arg is not a string:', function () {
    (function () {
      codelinks()();
    }).should.throw('helper-codelinks expects the first argument to be a string.');
  });
});
