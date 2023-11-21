import React from "react";
import { Button } from "antd";

const ButtonUI = ({ title, type, onClick }) => {
  return (
    <div>
      <Button
        type={type}
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        {title}
      </Button>
    </div>
  );
};

export default ButtonUI;
