/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 15:47:22
 */
const jwt = require('jsonwebtoken');
const config = require('../config/default');

module.exports = async (ctx, next) => {
    if (!ctx.headers.authorization) {
        ctx.throw(403, 'No token')
    }
    const token = ctx.headers.authorization.split(' ')[0]
    try {
        ctx.request.jwtPayload = jwt.verify(token, config.jwt.secret);
    } catch (err) {
        console.log(err)
        ctx.throw(err.status || 403, err.text);
    }

    await next();
}