/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 15:47:22
 */
const jwt = require('jsonwebtoken');
const config = require('../config/default');

module.exports = async (ctx, next) => {
    const authorization = ctx.get('authorization');
    if (!authorization) {
        ctx.throw(401, 'no token detected in http header \'Authorization\'');
    }
    const token = authorization.split(' ')[1];
    try {
        tokenContent = await jwt.verify(token, config.jwt.secret);
    } catch (err) {
        if ('TokenExpiredError' === err.name) {
            ctx.throw(401, 'token expired,请及时本地保存数据！');
        }
        ctx.throw(401, 'invalid token');
    }
    console.log('鉴权成功');
    await next();
}