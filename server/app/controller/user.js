'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    console.log('this.body===', this.ctx.request.body);
    console.log('=============jwt======', this.app.jwt);
    // const token = jwt.sign(userToken, secret, {expiresIn: '1h'})
    this.ctx.body = {
      code: 0,
    };
  }
}

module.exports = UserController;
