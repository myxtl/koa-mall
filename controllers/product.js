const productModel = require('../models/product');
const C = require('../utils/const');
const { Success, Error } = require('../utils/message');

exports.getProductList = async ctx => {
    let { pageNum, pageSize } = ctx.query;
    const offset = (pageNum - 1) * pageSize;
    const total = (await productModel.getProductLength()).length;
    const list = await productModel.getProductList(offset, pageSize);
    ctx.body = new Success({
        list,
        total,
        page: parseInt(pageNum)
    }, 'success')
}

exports.getProductById = async ctx => {
    let { id } = ctx.query;
    const result = await productModel.getProductById(id);
    if (result.length === 0) {
        ctx.body = new Error(C.ERROR_CODE.PRODUCT_NOT_FIND);
        return false;
    }
    ctx.body = new Success(result[0] ? result[0] : null, 'success');
}