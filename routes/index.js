/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:41:34
 */ 
const router = require('koa-router')();

// const { jwtAuth, decode } = require('../utils/jwtAuth')

// router.use(jwtAuth)

const common = require('./common');
const users = require('./users')
const categoryRouter = require('./category');
const productRouter = require('./product');
const bannerRouter = require('./banner')

router.use(common.routes());
router.use(users.routes());
router.use(categoryRouter.routes());
router.use(productRouter.routes());
router.use(bannerRouter.routes());

module.exports = router;
