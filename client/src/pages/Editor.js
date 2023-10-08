import React, { useState } from "react";
import ImageUpload from "../components/MainPage/ImageUpload";
import ImageEditor from "../components/MainPage/ImageEditor";
import "./styles.css";

const Editor = () => {
  const [image, setImage] = useState();
  const [file, setFile] = useState();

  return (
    < div>
        {!file && (
          <ImageUpload
            image={image}
            setImage={setImage}
            setFile={setFile}
            file={file}
          />
        )}
        {file && <ImageEditor file={file} image={image}/>}
    </div>
  );
};

export {Editor};
