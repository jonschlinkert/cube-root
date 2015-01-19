/*!
 * cube-root <https://github.com/jonschlinkert/cube-root>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var nthRoot = require('nth-root');

module.exports = function (r) {
  return nthRoot(r, 3);
};
