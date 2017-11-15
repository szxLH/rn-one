'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor (ctx) {
    super(ctx)
    this.config = this.ctx.app.config
    this.app = this.ctx.app
  }
  async login() {
    const { secret } = this.config.jwt
    const { name, password } = this.ctx.request.body
    const token = await this.app.jwt.sign({name}, secret, {expiresIn: 60})
    this.ctx.body = {
      code: 0,
      message: '登录成功',
      token
    };
  }
}

module.exports = UserController;
