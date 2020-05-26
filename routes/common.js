/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:59:53
 */ 
const router = require('koa-router')(); 
const common = require('../controllers/common');

router.prefix('/api');

router.get('/getSign', common.getSign);

module.exports = router;