/*!
 * helper-codelinks <https://github.com/helpers/helper-codelinks>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var api = require('api-toc');

/**
 * Generate a clickable list of API "code-links" for the methods
 * in the given `directory`.
 *
 * Each link takes you to the beginning line of code for the
 * corresponding method.
 *
 * **Example**
 *
 * ```js
 * {%%= codelinks('lib/') %}
 * ```
 * @param  {Object} `app` Pass an instance of [Template][template] or any application based on Template, like [verb], [assemble] or [generate].
 * @param  {String} `dir` The directory to scan for API methods to link to
 * @param  {String} `append`
 * @return {String}
 */

module.exports = function codelinks(app, options) {
  options = options || {};

  // if an instance of `Template` is passed, generate reflinks for libs referenced in the docs
  if (app && 'helpers' in app) {
    app.set('reflinks', ['api-toc', 'verb', 'template']);
  }

  return function (dir, append) {
    if (typeof dir !== 'string') {
      throw new TypeError('helper-codelinks expects the first argument to be a string.');
    }

    var res = api(dir, append);
    res += '\n\n';
    res += '_(Code links generated by [verb] using the [api-toc] helper)_';
    return res;
  }
};
