import { Input } from "antd";
import React from "react";

const InputUI = ({ id, name, placeholder, label_name, value, onChange }) => {
  return (
    <div className="flex">
      <div className="w-16">
        <label htmlFor={id} className="mb-2   text-gray-600">
          {label_name}
        </label>
      </div>

      <Input
        style={{ width: "481px" }}
        id={id}
        name={name}
        value={value}
        className=" outline-none bg-slate-200"
        onChange={onChange}
      />
    </div>
  );
};

export default InputUI;
