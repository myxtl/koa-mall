/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 16:50:40
 */ 
const usersModel = require('../models/users');
const {getToken} = require('../utils/getToken');
const { Success, Error } = require('../utils/message')

exports.login = async (ctx) => {
    let { userName, password } = ctx.request.body;

    let res = await usersModel.login(userName, password);

    ctx.body = new Success({
        token: getToken({ userName, password })
    }, '登录成功');
}