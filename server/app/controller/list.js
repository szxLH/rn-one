'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  get () {
    this.ctx.body = {code: 0}
  }

  async post () {
    console.log('post===', this.ctx.request.post)
    this.ctx.body = {code: 0}
  }
}

module.exports = ListController