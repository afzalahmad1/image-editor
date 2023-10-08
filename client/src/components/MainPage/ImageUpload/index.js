import React from "react";
import "./styles.css";
import axios from "axios";
const ImageUpload = ({ image, setImage, setFile, file }) => {
  const imageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    console.log("image", image);
    try {
      const res = await axios
        .post("https://server-7xlh.onrender.com/image/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        setFile(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="image-upload">
      <form  onSubmit={imageUpload}>
        <div >
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="lower-btn">
          <button  type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;


// const image = new window.Image();
//     image.src = file.path;
//     image.onload = () => {
//       setImage(image);
//     };