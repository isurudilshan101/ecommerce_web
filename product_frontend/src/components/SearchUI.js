import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchUI = ({ onSearch }) => {
  // const handleSearch = (value) => {
  //   if (onSearch) {
  //     onSearch(value);
  //   }
  // };

  return (
    <div style={{ display: "flex" }}>
      <Input placeholder="Basic usage" className="w-1/2" />
      <Button
        icon={<SearchOutlined />}
        className="bg-blue-500 hover:bg-blue-700 text-white"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchUI;
