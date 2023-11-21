const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8501;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB Connected Successful!");
});

// app.listen(PORT, () => {
//   console.log(`Server started port on ${PORT}`);
// });

const productRouter = require("./routes/product");
app.use("/product", productRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});
