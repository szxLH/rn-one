'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
  jwt: {
    enabled: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
