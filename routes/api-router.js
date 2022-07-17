const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller.js');


router.route('/')
  .get(() => {
    console.log('api router...')
  });

// CRUD (CREATE READ UPDATE DELETE)

router.route('/order/create')
  .post(apiController.createOrder);
router.route('/order/get/all')
  .get(apiController.getOrdersAll);
router.route('/orderitems/get/:order_id')
  .get(apiController.getOrderItemsByOrderId);
router.route('/order/status/update/:order_id')
  .post(apiController.updateOrderStatus);
router.route('/order/delete/:order_id')
  .post(apiController.deleteOrder);


module.exports = router;
