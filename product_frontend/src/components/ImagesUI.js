import React from "react";

const ImagesUI = ({ onChange, onClick, images }) => {
  return (
    <div>
      <label className="custom-file-input">
        Product Images
        <span className="text-blue-500 underline cursor-pointer">
          Add Images
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={onChange}
          style={{ display: "none" }}
        />
      </label>
      {/* <button onClick={onClick}>Upload Images</button> */}

      {/* {images.length > 0 && (
        <div>
          <h2>Selected Images:</h2>
          <ul>
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default ImagesUI;
