import React, { useState } from "react";
import InputUI from "../components/InputUI";
import "./AddNewProduct.css";
import TextAreaUI from "../components/TextAreaUI";
import ButtonUI from "../components/ButtonUI";
import ImagesUI from "../components/ImagesUI";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState();
  const [productDes, setProductDes] = useState("");
  const [images, setImages] = useState([]);

  const handleSKU = (e) => {
    setSku(e.target.value);
    // console.log(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
    // console.log(e.target.value);
  };

  const handleProductDes = (e) => {
    setProductDes(e.target.value);
    // console.log(e.target.value);
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    const selectedImages = Array.from(e.target.files);
    console.log("selectedImages", selectedImages);
    selectedImages.forEach((file, index) => {
      console.log(`File ${index + 1}: ${file.name}`);
    });

    setImages(selectedImages);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    alert("Product Added Successfully !");

    // const formData = {
    //   sku,
    //   name,
    //   qty,
    //   productDes,
    // };

    console.log("sku", sku);
    console.log("name", name);
    console.log("qty", qty);
    console.log("productDes", productDes);

    const formData = new FormData();
    formData.append("sku", sku);
    formData.append("name", name);
    formData.append("qty", qty);
    formData.append("productDes", productDes);

    images.forEach((image) => {
      formData.append("images", image);
    });

    console.log("FRONTEND", formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:8501/product/add", formData, config)
      .then((response) => {
        console.log(response.data.message);
        toast.success("Successfully added Product!", {
          position: "top-right", // Position where the notification will appear
          autoClose: 5000, // Auto-close after 3 seconds
        });
        console.log(response.data.message);

        setSku("");
        setName("");
        setQty("");
        setProductDes("");
        setImages([]);

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="heading_section mt-6 mb-4">
        <h1 className="text-3xl">Products - Add Product</h1>
      </div>
      <form encType="multipart/form-data">
        <div className="mb-14">
          <InputUI
            id="sku"
            name="sku"
            onChange={handleSKU}
            label_name="SKU"
            value={sku}
          />
        </div>
        <div>
          <div className="flex costom_style mb-14">
            <div>
              <InputUI
                id="name"
                name="name"
                onChange={handleName}
                label_name="Name"
                value={name}
              />
            </div>

            <div>
              <InputUI
                id="qty"
                name="qty"
                onChange={handleQty}
                label_name="QTY"
                value={qty}
              />
            </div>
          </div>

          <div className="mb-14">
            <TextAreaUI
              label_name="Product Description"
              small_label="Small description about the Product"
              value={productDes}
              onChange={handleProductDes}
            />
          </div>
        </div>
        <div className="image_ui mb-14">
          <ImagesUI onChange={handleImageChange} />
        </div>
        <div className="flex justify-end">
          <ButtonUI
            title="Add product"
            type="primary submit"
            onClick={handleClick}
          />
        </div>
      </form>
      {sku}
      <br></br>
      {name}
      <br></br>
      {qty}
      <br></br>
      {productDes}
      <br></br>
      <div>
        {images.map((file, index) => (
          <div key={index}>
            <p>
              File {index + 1}: {file.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewProduct;
