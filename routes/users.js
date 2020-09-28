/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 17:03:15
 */
const router = require('koa-router')();
const users = require('../controllers/users');

router.prefix('/users');

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: 用户登录
 *     description: 用户登录
 *     tags:
 *       - 用户模块
 *     parameters:
 *       - name: userName
 *         in: formData
 *         required: true
 *         description: 用户名
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         description: 用户密码
 *         type: string
 *     responses:
 *       200:
 *         description: 登录成功
 */

router.post('/login', users.login);
router.post('/register', users.register);
router.post('/wxlogin', users.wxlogin);

module.exports = router;