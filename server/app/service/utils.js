'use strict';
const Service = require('egg').Service;

class utilsService extends Service {
  constructor(ctx) {
    super(ctx);
    this.app = this.ctx.app;
  }
  parseError(err) {
    return {
      code: err.code || 503,
      message: err.message,
    };
  }

  createToken(user) {
    return this.app.jwt({ name: user.userName }, this.app.config.jwt.secret, {
      expiresIn: 2 * 60,
    });
  }
}

module.exports = utilsService;
