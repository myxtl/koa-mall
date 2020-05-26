/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:47:56
 */ 
const router = require('koa-router')(); 
const category = require('../controllers/category');

router.prefix('/category');

router.get('/query', category.getCategoryList);
router.get('/findOne/:id', category.getCategoryById);
router.post('/add', category.addCategory);
router.post('/update', category.updateCategory);
router.post('/batchDel', category.deleteCategorys);

module.exports = router;
