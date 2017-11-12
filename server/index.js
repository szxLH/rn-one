var express = require('express')
var bodyParser = require("body-parser")
var logger = require('morgan')
var app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

app.user(bodyParser.json())
app.user(bodyParser.urlencoded({ extended: false }))
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.get('/user/login', function (req, res) {
  console.log('req.body====', req.body)
  res.json({
    code: 1
  })
})

app.listen(8082, function () {
  console.log('listen in 8082')
})