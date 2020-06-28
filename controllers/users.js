/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 16:50:40
 */ 
const usersModel = require('../models/users');
const {getToken} = require('../utils/getToken');
const { Success, Error } = require('../utils/message')
const C = require('../utils/const');

exports.login = async (ctx) => {
    let { userName, password } = ctx.request.body;

    if (!userName || !password) {
        ctx.body = new Error(C.ERROR_CODE.REQUIRE_MORE_PARAMS, null);
        return false;
    }

    let res = await usersModel.login(userName, password);
    if (res.length === 0) {
        ctx.body = new Error(C.ERROR_CODE.USER_PASSWORD_ERROR, null);
        return false;
    }

    ctx.body = new Success({
        userId: res[0].userId,
        userName: res[0].userName,
        phoneNumber: res[0].phoneNumber,
        token: getToken({ userName, password })
    }, '登录成功');
}
exports.register = async ctx => {
    let { userName, password } = ctx.request.body;
    let query = await usersModel.login(userName, password);
    console.log(query)
    if (query.length !== 0) {
        ctx.body = new Error(C.ERROR_CODE.LOGIN_NAME_ALREADY_TOOK, null);
        return false;
    }
    let res = await usersModel.register(userName, password);
    ctx.body = new Success(null, '注册成功')
}

exports.wxlogin = async ctx => {
    let {code, rawData, signature, encrypteData, iv} = res.request.body;
    console.log(code);
    ctx.body = new Success(null, 'success');
}