'use strict';
const Service = require('egg').Service;

class utilsService extends Service {
  parseError(err) {
    return {
      code: err.code || 503,
      message: err.message,
    };
  }
}

module.exports = utilsService;
