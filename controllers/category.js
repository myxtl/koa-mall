/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:46:57
 */
const categoryModel = require('../models/category');
const C = require('../utils/const');
const { Success, Error } = require('../utils/message');

exports.addCategory = async ctx => {
    let { name, sort_order, parent_id } = ctx.request.body
    let result = await categoryModel.addCategory(name, sort_order, parent_id);
    ctx.body = new Success(null, '添加成功');
}
exports.getCategoryList = async ctx => {
    const list = await categoryModel.getCategoryList();
    let categories = [];
    list.forEach(item => {
        if (item.parent_id == null) {
            item.children = [];
            categories.push(item);
        }
    });
    list.forEach(item => {
        if (item.parent_id) {
            categories.forEach(category => {
                if (item.parent_id == category.id) {
                    category.children.push(item);
                }
            });
        }
    });
    console.log(categories)
    ctx.body = new Success(categories, 'success');
}
exports.getCategoryById = async ctx => {
    const { id } = ctx.params;
    const res = await categoryModel.getCategoryById(id);
    ctx.body = new Success(res[0] ? res[0] : null, 'success');
}
exports.updateCategory = async ctx => {
    ctx.body = new Success(null, '修改成功');
}
exports.deleteCategorys = async ctx => {
    let { ids } = ctx.request.body;
    const res = categoryModel.deleteCategorys(ids)
    ctx.body = new Success(null, '删除成功');
}