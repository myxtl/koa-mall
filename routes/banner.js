const router = require('koa-router')(); 
const banner = require('../controllers/banner');

router.prefix('/banner');

router.get('/query', banner.getBannerList);
router.get('/findOne/:id', banner.getBannerById);
router.post('/add', banner.addBanner);
router.post('/update', banner.updateBanner);
router.post('/batchDel', banner.deleteBanners);

module.exports = router;
