const mongoose = require('mongoose');

/*

*/

const orderSchema = new mongoose.Schema({
  restoran: {
    type: String,
    required: [true, 'Order must belog to a restoran'],
  },
  ime_i_prezime: {
    type: String,
    required: [true],
  },
  adresa: {
    type: String,
    required: [true],
  },
  telefon: {
    type: String,
    required: [true],
  },
  napomena: {
    type: String
  },
  status: {
    type: String,
    required: [true]
  },
  active: {
    type: Boolean,
    required: [true]
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  date_modified: {
    type: Date
  }
}, { collection: 'order' });

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
