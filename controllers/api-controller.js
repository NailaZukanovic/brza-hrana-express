const config = require('../utils/config.js');
var Order = require('../models/order-model.js');
var OrderItem = require('../models/order-item-model.js');


// var apiControler 


// CONTROLLERS


exports.getOrdersAll = async (req, res, next) => {
  console.log('--- getOrdersAll controller');
  let response;
  try {
    // STEP Mongoose model Order reading from MongoDB
    const orders = await Order.find({});
    console.log('orders');
    console.log(typeof orders);
    // console.log(orders);
    response = {
      is_success: true,
      readme: 'this is getOrdersAll response',
      payload: {
        orders: orders
      }
    };
    res.status(200).json(response);
  } catch (err) {
    response = {
      error: 'CATCH_ERROR_INSIDE_CIONTROLLER'
    };
    res.status(500).json(response);
  }
};


exports.getOrderItemsByOrderId = async (req, res, next) => {
  console.log('--- getOrderItemsByOrderId controller');
  let response;
  const { order_id } = req.params; // route params
  try {
    // STEP Mongoose model Order reading from MongoDB
    const orderItems = await OrderItem.find({
      order_id
    });
    console.log('orderItems');
    console.log(typeof orderItems);
    // console.log(orderItems);
    response = {
      is_success: true,
      readme: 'this is getOrderItemsByOrderId response',
      payload: {
        order_items: orderItems,
        order_id: order_id
      }
    };
    res.status(200).json(response);
  } catch (err) {
    response = {
      error: 'CATCH_ERROR_INSIDE_CIONTROLLER'
    };
    res.status(500).json(response);
  }
};


exports.createOrder = async (req, res, next) => {
  console.log('--- createOrder controller');
  let response;
  try {
    response = {
      is_success: false,
      readme: 'this is createOrder response',
    };

    console.log('test 1');
    console.log('req.body.formData');
    console.log(req.body.formData);

    // STEP Mongoose model order make changes in MongoDB
    const newOrder = await Order.create({
      ime_i_prezime: req.body.formData.ime_i_prezime,
      adresa: req.body.formData.adresa,
      telefon: req.body.formData.telefon,
      napomena: req.body.formData.napomena,
      status: 'Na čekanju',
      active: false
    });
    console.log('test 2');
    console.log(newOrder._id);
    console.log(newOrder);
    if (newOrder._id) {
      const order_id = newOrder._id
      const order_items = req.body.formData.order_items; // order_items
      const prepared_order_items = order_items.map((item, index) => {
        return {
          order_id,
          kategorija: item.kategorija,
          naziv: item.naziv,
          opcije: item.opcije
        };
      });
      OrderItem.insertMany(prepared_order_items, function (error, docs) { })
        .then((docs) => {
          response = {
            is_success: true,
            readme: 'this is createOrder response',
          };
          res.status(200).json(response);
        })

    }
  } catch (err) {
    response = {
      error: 'CATCH_ERROR_INSIDE_CIONTROLLER',
      error_data: err
    };
    res.status(500).json(response);
  }
};


exports.updateOrderStatus = async (req, res, next) => {
  console.log('--- updateOrderStatus controller');
  let response;
  const { order_id } = req.params; // route params
  try {
    response = {
      is_success: false,
      readme: 'this is updateOrderStatus response',
    };

    let formData = req.body.formData;
    // STEP Mongoose model Order make changes in MongoDB
    const results = await Order.findOneAndUpdate({
      _id: order_id,
    }, {
      status: formData.status,
      date_modified: Date.now()
    });
    console.log('results');
    console.log(results);

    response = {
      is_success: true,
      readme: 'this is updateOrderStatus response',
    };
    res.status(200).json(response);
  } catch (err) {
    response = {
      error: 'CATCH_ERROR_INSIDE_CIONTROLLER'
    };
    res.status(500).json(response);
  }
};


exports.deleteOrder = async (req, res, next) => {
  console.log('--- deleteOrder controller');
  let response;
  const { order_id } = req.params; // route params
  try {
    console.log('req.body');
    console.log(req.body);
    console.log(req.body.formData);

    // STEP Mongoose model Order make changes in MongoDB
    const results = await Order.findOneAndDelete({
      _id: order_id
    });
    console.log('results');
    console.log(results);
    response = {
      is_success: true,
      readme: 'this is deleteOrder response',
    };
    res.status(200).json(response);
  } catch (err) {
    response = {
      error: 'CATCH_ERROR_INSIDE_CIONTROLLER'
    };
    res.status(500).json(response);
  }
};


// module.exports = apiControler;