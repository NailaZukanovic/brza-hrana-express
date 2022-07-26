const mongoose = require('mongoose');

/*
kategorija: 'Hamburger',
naziv: 'Hamburger Dupli',
cena: 500,
slika: 'slika-hamburger.jpg',
opcije: ['Zelena salata', 'Luk', 'Kupus', 'Kečap', 'Urnebes']
*/

const orderItemSchema = new mongoose.Schema({
  order_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Order item must belong to an order']
  },
  kategorija: {
    type: String,
    required: [true],
  },
  naziv: {
    type: String,
    required: [true],
  },
  kolicina: {
    type: Number,
    required: [true],
  },
  odabrane_opcije: [String]
}, { collection: 'order_item' });

const Tour = mongoose.model('order_item', orderItemSchema);

module.exports = Tour;
