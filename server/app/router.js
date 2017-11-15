'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.post('/user/login', app.controller.user.login);
  app.get('/list', app.controller.list.get);
  app.post('/list', app.controller.list.post);
};
