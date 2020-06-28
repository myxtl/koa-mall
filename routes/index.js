/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:41:34
 */ 
const router = require('koa-router')();

const { jwtAuth, decode } = require('../utils/jwtAuth')

router.use(jwtAuth)

const categoryRouter = require('./category');
const common = require('./common');
const users = require('./users')

router.use(categoryRouter.routes());
router.use(common.routes());
router.use(users.routes());

module.exports = router;
