/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:46:57
 */ 
const categoryModel = require('../models/category');
const C = require('../utils/const');
const {Success, Error} = require('../utils/message');

exports.addCategory = async ctx => {
    ctx.body = new Success(null, '添加成功');
}
exports.getCategoryList = async ctx => {
    const list = await categoryModel.getCategoryList();
    ctx.body = new Success(list, 'success');
}
exports.getCategoryById = async ctx => {
    const { id } = ctx.params;
    const data = await categoryModel.getCategoryById(id);
    ctx.body = new Success(data[0], 'success');
}
exports.updateCategory = async ctx => {
    ctx.body = new Success(null, '修改成功');
}
exports.deleteCategory = async ctx => {
    ctx.body = new Success(null, '删除成功');
}