const mongoose = require('mongoose');

/*
kategorija: 'Hamburger',
naziv: 'Hamburger Dupli',
cena: 500,
slika: 'slika-hamburger.jpg',
opcije: ['Zelena salata', 'Luk', 'Kupus', 'Kečap', 'Urnebes']
*/

const productSchema = new mongoose.Schema({
  restoran: {
    type: String,
    required: [true],
  },
  kategorija: {
    type: String,
    required: [true],
  },
  naziv: {
    type: String,
    required: [true],
  },
  opcije: {
    type: [String],
    default: []
  },
  slika: {
    type: String,
    default: ''
  },
  cena: {
    type: String,
    required: [true]
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  date_modified: {
    type: Date
  }
}, { collection: 'product' });

const Product = mongoose.model('product', productSchema);

module.exports = Product;
