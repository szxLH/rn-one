var express = require('express')
var bodyParser = require("body-parser")
var logger = require('morgan')
var app = express()
var fs = require('fs')
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//设置跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "X-Requested-With")
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8")
//   next()
// })

app.post('/user/login', function (req, res) {
  console.log('req====', req)
  console.log('req.params====', req.params)
  console.log('req.body====', req.body)
  console.log('req.text====', req.text)
  fs.writeFileSync('./data.txt', toString(req))
  res.json({
    code: 1
  })
})

app.listen(8082, function () {
  console.log('listen in 8082')
})