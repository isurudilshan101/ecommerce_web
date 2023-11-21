const express = require("express");
const router = express.Router();
let Product = require("../models/Product");

//Add new product
router.post("/add", async (req, res) => {
  try {
    console.log(req.body);

    // const sku = req.body.sku;
    // const name = req.body.name;
    // const qty = req.body.qty;
    // const productDes = req.body.productDes;

    const { sku, name, qty, productDes } = req.body;

    const newProduct = {
      sku,
      name,
      qty,
      productDes,
    };

    await new Product(newProduct)
      .save()
      .then((result) => {
        console.log("Result", result);
        res.send({ message: "Successfully Added!" });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

//Get All products

router.get("/", async (req, res) => {
  await Product.find()
    .then((result) => {
      console.log("Result All Products", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete product

router.delete("/delete/:productId", async (req, res) => {
  let productId = req.params.productId;
  console.log("Product ID in Backend", productId);

  await Product.findByIdAndDelete(productId).then(() => {
    res.json({ status: "Delete Successfull" });
  });
});

module.exports = router;
