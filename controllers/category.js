/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:46:57
 */ 
const C = require('../utils/const');
const {Success, Error} = require('../utils/message');

exports.addCategory = async ctx => {
    ctx.body = new Success(null, '添加成功');
}
exports.getCategoryList = async ctx => {
    ctx.body = new Success([], 'success');
}
exports.getCategoryById = async ctx => {
    ctx.body = new Success(null, 'success');
}
exports.updateCategory = async ctx => {
    ctx.body = new Success(null, '修改成功');
}
exports.deleteCategory = async ctx => {
    ctx.body = new Success(null, '删除成功');
}