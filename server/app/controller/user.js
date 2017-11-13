'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    this.ctx.set('Access-Control-Allow-Origin:*');
    console.log('this.body===', this.ctx.request.body);
    this.ctx.body = {
      code: 0,
    };
  }
}

module.exports = UserController;
