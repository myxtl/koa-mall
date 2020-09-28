/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:47:56
 */
const router = require('koa-router')();
const category = require('../controllers/category');

router.prefix('/category');

/**
 * @swagger
 * /category/query:
 *   get:
 *     summary: 获取所有分类
 *     description: 获取所有分类
 *     tags:
 *       - 分类模块
 *     parameters:

 *     responses:
 *       200:
 *         description: success
 */

/**
 * @swagger
 * /category/findOne/:id:
 *   get:
 *     summary: 根据ID获取单个分类
 *     description: 根据ID获取单个分类
 *     tags:
 *       - 分类模块
 *     parameters:
 *       - name: id
 *         in: params
 *         required: true
 *         description: 分类id
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */

/**
 * @swagger
 * /category/add:
 *   post:
 *     summary: 添加分类
 *     description: 添加分类
 *     tags:
 *       - 分类模块
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         description: 分类名称
 *         type: string
 *       - name: img_url
 *         in: formData
 *         required: true
 *         description: 图片url
 *         type: string
 *       - name: sort_order
 *         in: formData
 *         required: false
 *         description: 分类排序
 *         type: string
 *       - name: parent_id
 *         in: formData
 *         required: false
 *         description: 父级id
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */

/**
 * @swagger
 * /category/update:
 *   post:
 *     summary: 修改分类
 *     description: 修改分类
 *     tags:
 *       - 分类模块
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         description: 分类名称
 *         type: string
 *       - name: img_url
 *         in: formData
 *         required: true
 *         description: 图片url
 *         type: string
 *       - name: sort_order
 *         in: formData
 *         required: false
 *         description: 分类排序
 *         type: string
 *       - name: parent_id
 *         in: formData
 *         required: false
 *         description: 父级id
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */

 /**
 * @swagger
 * /category/batchDel:
 *   post:
 *     summary: 删除分类
 *     description: 删除分类
 *     tags:
 *       - 分类模块
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ids
 *         in: formData
 *         required: true
 *         description: 分类id
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */

router.get('/query', category.getCategoryList);
router.get('/findOne/:id', category.getCategoryById);
router.post('/add', category.addCategory);
router.post('/update', category.updateCategory);
router.post('/batchDel', category.deleteCategorys);

module.exports = router;