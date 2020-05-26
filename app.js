/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:41:34
 */ 
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const logger = require('koa-logger')
const {staticDir} = require('./config/default')
const error = require('./middlewares/error')

// 跨域
app.use(cors());

app.use(bodyParser());

// error handler


// middlewares
app.use(error)

// logger


// routes
const Routers = require('./routes');
app.use(Routers.routes()).use(Routers.allowedMethods());



module.exports = app
