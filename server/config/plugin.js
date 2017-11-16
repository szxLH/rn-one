'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
  jwt: {
    enabled: true,
    package: 'egg-jwt',
  },
  mongoose: {
    enabled: true,
    package: 'egg-mongoose',
  },
};
