/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:41:34
 */ 
const router = require('koa-router')();

const categoryRouter = require('./category');
const common = require('./common');

router.use(categoryRouter.routes());
router.use(common.routes());

module.exports = router;
