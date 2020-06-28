/**
 * 描述: jwt-token验证和解析函数
 * 作者: Jack Chen
 * 日期: 2020-06-20
*/

const jwt = require('jsonwebtoken'); // 引入验证jsonwebtoken模块
const koaJwt = require('koa-jwt'); // 引入koa-jwt模块
const { jwtConfig } = require('../config/default')
console.log(jwtConfig)

// 验证token是否过期
const jwtAuth = koaJwt({
  // 设置密钥
  secret: 'myxtl',
  // 设置为true表示校验，false表示不校验
  credentialsRequired: true,
  // 自定义获取token的函数
  getToken: (req) => {
    if (req.headers.authorization) {
      return req.headers.authorization
    } else if (req.query && req.query.token) {
      return req.query.token
    }
  }
  // 设置jwt认证白名单，比如/api/login登录接口不需要拦截
}).unless({
  path: [
    '/',
    '/users/login',
    '/users/register',
    '/api/resetPwd'
  ]
})

function decode(req) {
  const token = req.get('Authorization')
  return jwt.verify(token, 'myxtl');
}

module.exports = {
  jwtAuth,
  decode
}
