/*!
 * cube-root <https://github.com/jonschlinkert/cube-root>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var cubeRoot = require('./');

it('should return the cube root of a number:', function () {
  assert.equal(cubeRoot(-27, 3), -3);
  assert.equal(cubeRoot(27, 3), 3);
  assert.equal(cubeRoot(-8, 3), -2);
  assert.equal(cubeRoot(8, 3), 2);
});
