const bannerModel = require('../models/banner');
const utils = require('../utils/utils');
const C = require('../utils/const');
const { Success, Error } = require('../utils/message');

exports.addBanner = async ctx => {
    let { img_url, product_id } = ctx.request.body
    let result = await bannerModel.addBanner(img_url, product_id);
    ctx.body = new Success(result, '添加成功');
}
exports.getBannerList = async ctx => {
    const list = await bannerModel.getBannerList();
    ctx.body = new Success(utils.camel(list), 'success');
}
exports.getBannerById = async ctx => {
    const { id } = ctx.params;
    const res = await bannerModel.getBannerById(id);
    ctx.body = new Success(res[0] ? utils.camel(res[0]) : null, 'success');
}
exports.updateBanner = async ctx => {
    ctx.body = new Success(null, '修改成功');
}
exports.deleteBanners = async ctx => {
    let { ids } = ctx.request.body;
    const res = bannerModel.deleteBanners(ids)
    ctx.body = new Success(null, '删除成功');
}