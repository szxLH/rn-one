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
    try {
      const { name, password } = data;
      const user = await this.ctx.model.User.findOne({ user_name: name });
      let isMatch = false;
      user && (isMatch = await user.comparePassword(password));
      if (!isMatch) {
        this.ctx.body = {
          code: 1,
          message: '用户名或密码错误！',
        };
      } else {
        const token = await this.service.utils.createToken(user)
        this.ctx.body = {
          code: 0,
          data: { token },
          message: '登录成功',
        };
      }
    } catch (e) {
      console.log('e======', e)
      this.ctx.body = this.service.utils.parseEroor(e);
    }
  }

  async register() {
    const { data } = this.ctx.request.body;
    const { name, password } = data;
    const user = await this.app.model.User.find({ user_name: name });
    if (user && user.length) {
      this.ctx.body = {
        code: 1,
        message: '用户名已存在',
      };
    } else {
      const newUser = new this.ctx.model.User({
        user_name: name,
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
