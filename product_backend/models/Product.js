const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  sku: {
    type: "String",
    required: true,
  },

  name: {
    type: "String",
    required: true,
  },

  qty: {
    type: "String",
    required: true,
  },

  productDes: {
    type: "String",
    required: true,
  },

  productImage: {
    data: Buffer, // Binary data for the image
    contentType: String, // Mime type of the image
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
