import TextArea from "antd/es/input/TextArea";
import React from "react";

const TextAreaUI = ({ name, onChange, label_name, small_label, id, value }) => {
  return (
    <div>
      <div>
        <label htmlFor={id} className="mb-2   text-gray-600">
          {label_name}
          <br></br>
          <span className="text-sm text-gray-700">{small_label}</span>
        </label>
      </div>
      <TextArea
        id="productDescription"
        name="productDescription"
        rows={4}
        className=" outline-none bg-slate-200"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaUI;
