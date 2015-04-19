'use strict';

var verb = require('verb');
var codelinks = require('./')(verb);

verb.helper('codelinks', codelinks);

verb.task('default', function () {
  verb.src('.verb.md')
    .pipe(verb.dest('.'));
});
