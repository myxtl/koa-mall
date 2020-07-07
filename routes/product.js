const router = require('koa-router')(); 
const product = require('../controllers/product');

router.prefix('/product');

router.get('/query', product.getProductList);
router.get('/findOne', product.getProductById);
// router.post('/add', product.addProduct);
// router.post('/update', product.updateProduct);
// router.post('/batchDel', product.deleteProducts);

module.exports = router;