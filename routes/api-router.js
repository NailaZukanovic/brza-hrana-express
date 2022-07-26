const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller.js');


router.route('/')
  .get(() => {
    console.log('api router...')
  });

// API ROUTES

router.route('/order/create')
  .post(apiController.createOrder);
router.route('/order/get/all')
  .get(apiController.getOrdersAll);
router.route('/orderitems/get/:order_id')
  .get(apiController.getOrderItemsByOrderId);
router.route('/order/status/update/:order_id')
  .patch(apiController.updateOrderStatus);
router.route('/order/delete/:order_id')
  .delete(apiController.deleteOrder);

router.route('/product/create')
  .post(apiController.createProduct);
router.route('/product/get/all')
  .get(apiController.getProductsAll);
router.route('/product/update/:product_id')
  .patch(apiController.updateProduct);
router.route('/product/delete/:product_id')
  .delete(apiController.deleteProduct);

module.exports = router;
