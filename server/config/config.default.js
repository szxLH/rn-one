'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510560509783_606';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      // headerName: 'x-csrf-token',
      // domainWhiteList: ['localhost:8081']
    },
  };

  config.jwt = {
    secret: 'szxlh',
    enable: true,
    // match: '',
    match: '/list',
  };

  config.mongoose = {
    enable: true,
    url: 'mongodb://127.0.0.1/rnMovies',
  };

  return config;
};
