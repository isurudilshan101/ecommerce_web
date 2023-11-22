const express = require("express");
const router = express.Router();
const multer = require("multer");
let Product = require("../models/Product");

// Multer configuration
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

//Add new product
router.post("/add", upload.array("images", 3), async (req, res) => {
  try {
    console.log(req.body);

    // const sku = req.body.sku;
    // const name = req.body.name;
    // const qty = req.body.qty;
    // const productDes = req.body.productDes;

    const { sku, name, qty, productDes } = req.body;

    const images = req.files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    console.log("IMAGESsssssssssssssssssssssssssssss", images);

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
