import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Space, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ButtonUI from "../../components/ButtonUI";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [productData, setProductData] = useState([]);

  const handleEdit = () => {
    console.log("EDIT");
  };

  const handleDelete = (record) => {
    console.log("product_id", record._id);
    const product_id = record._id;

    axios
      .delete(`http://localhost:8501/product/delete/${product_id}`)
      .then((result) => {
        console.log(result);
        setProductData(
          productData.filter((product) => product._id !== product_id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const redIconStyle = { color: "red" };
  const blueIconStyle = { color: "blue" };

  useEffect(() => {
    axios
      .get("http://localhost:8501/product/")
      .then((result) => {
        console.log("Result", result);
        setProductData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("productData", productData);

  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
      // render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: "Name",
      dataIndex: "qty",
      key: "qty",
      width: 80,
    },
    {
      title: "QTY",
      dataIndex: "qty",
      key: "qty",
      ellipsis: true,
    },
    {
      title: "Product Description",
      dataIndex: "productDes",
      key: "productDes",
      ellipsis: true,
    },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => {
        // console.log("RECORDDDDDDDDD", record._id);
        return (
          <Space size="middle">
            <Button
              type=""
              icon={<EditOutlined style={blueIconStyle} />}
              onClick={() => handleEdit(record)}
            ></Button>
            <Popconfirm
              title="Are you sure you want to delete this item?"
              onConfirm={() => handleDelete(record)}
              okText={
                <span
                  style={{
                    color: "black",
                  }}
                >
                  Yes
                </span>
              }
              cancelText="No"
            >
              <Button
                type=""
                icon={<DeleteOutlined style={redIconStyle} />}
              ></Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 2 Lake Park, London No. 2 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  //];
  return (
    <div className="container">
      <div className="head_section">
        <h1>AllProduct</h1>
        <Link to="/add">
          <ButtonUI title="+ADD PRODUCT" />
        </Link>
      </div>

      <Table columns={columns} dataSource={productData} />
    </div>
  );
};

export default AllProduct;
