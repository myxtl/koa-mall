/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 17:03:15
 */ 
const router = require('koa-router')(); 
const users = require('../controllers/users');

router.prefix('/users');

router.post('/login', users.login);

module.exports = router;