const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  profilePic: { 
    type: String,
    trim: true,
  },
  originalPrice: {
    type: Number,
  },
  colors: { 
    type: Array,
    required: true,
  },
  ourPrice: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
  qteStock:{
      type:Number,
      required: true,
  }

});

const Product = mongoose.model('products', ProductsSchema);

module.exports = Product;