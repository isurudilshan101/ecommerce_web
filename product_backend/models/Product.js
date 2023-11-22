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

  images: [
    {
      data: {
        type: Buffer,
        required: true,
      },
      contentType: {
        type: String,
        required: true,
      },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
