/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:52:34
 */
const C = require('../utils/const');
const {
    Error
} = require('../utils/message');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        if (!e) {
            ctx.body = new Error(C.ERROR_CODE.SYSTEM_ERROR);
        } else if (e.errorCode) {
            ctx.body = e;
        } else {
            ctx.body = new Error(C.ERROR_CODE.SYSTEM_ERROR, e.name, e.message);
        }
    }
};