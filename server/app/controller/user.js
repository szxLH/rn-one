'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.config = this.ctx.app.config;
    this.app = this.ctx.app;
    this.service = this.ctx.service;
  }

  async login() {
    const { data } = this.ctx.request.body;
    // const { secret } = this.config.jwt;
    try {
      const { name, password } = data;
      const user = await this.ctx.model.User.findOne({ userName: name });
      let isMatch = false;
      // let token = null;
      user && (isMatch = await user.comparePassword(password));
      // isMatch && (token = await this.service.utils.createToken(user));
      if (!isMatch) {
        this.ctx.body = {
          code: 1,
          message: '用户名或密码错误！',
        };
      } else {
        this.ctx.body = {
          code: 0,
          // data: { token },
          message: '登录成功',
        };
      }
    } catch (e) {
      console.log('e======', e)
      // this.ctx.body = this.service.utils.parseError(e);
      this.ctx.body = {code: 1};
    }
    // const token = await this.app.jwt.sign({name}, secret, {expiresIn: 60});
  }

  async register() {
    const { data } = this.ctx.request.body;
    const { name, password } = data;
    const user = await this.app.model.User.find({ userName: name });
    if (user && user.length) {
      this.ctx.body = {
        code: 1,
        message: '用户名已存在',
      };
    } else {
      const newUser = new this.ctx.model.User({
        userName: name,
        password,
      });
      await newUser.save();
      this.ctx.body = {
        code: 0,
        data: {},
        message: '注册成功',
      };
    }
  }
}

module.exports = UserController;
