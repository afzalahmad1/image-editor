import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Stage, Layer, Rect, Image, Star, Text, Circle } from "react-konva";
// import { createRoot } from 'react-dom/client';
import useImage from "use-image";

const UploadedImage = ({ file }) => {
  //  console.log("path",file.path)
  const [image] = useImage(`https://image-editor-pen3.onrender.com/${file.path}`, 'anonymous');
  // console.log("image", image);
  return <Image x={10} y={0} width={400} height={500} image={image} />;
};

const AddLogo = () => {
  const [image] = useImage(`https://konvajs.org/assets/lion.png`, 'anonymous');
  return (
    <Image x={20} y={30} width={100} height={100} draggable image={image} />
  );
};

const AddRectangle = ({ color }) => {
  // console.log("rect");
  return (
    <Rect
      draggable
      x={200}
      y={200}
      width={50}
      height={50}
      fill={color}
      shadowBlur={10}
    />
  );
};

const AddCircle = ({ color }) => {
  return <Circle draggable x={150} y={100} radius={30} fill={color} />;
};

const AddStar = ({ color }) => {
  return (
    <Star
      draggable
      x={150}
      y={300}
      stroke={color}
      strokeWidth={2}
      numPoints={5}
      innerRadius={40}
      outerRadius={20}
      fill={color}
    />
  );
};

const AddText = ({ text, fontSize, color }) => {
  return (
    <Text text={text} x={20} y={0} draggable fontSize={fontSize} fill={color} />
  );
};

const ImageEditor = ({ file, image }) => {
  const [component, setComponent] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState(16);
  const [imageEdit, setImageEdit] = useState([]);
  const stageRef = useRef(null);

  useEffect(() => {
    if (component === "Rectangle") {
      setImageEdit([...imageEdit, <AddRectangle color={color} />]);
      setComponent("");
    } else if (component === "Circle") {
      setImageEdit([...imageEdit, <AddCircle color={color} />]);
      setComponent("");
    } else if (component === "Text") {
      setImageEdit([
        ...imageEdit,
        <AddText text={text} fontSize={fontSize} color={color} />,
      ]);
      setComponent("")
      setText("");
    } else if (component === "Star") {
      setImageEdit([...imageEdit, <AddStar color={color} />]);
      setComponent("");
    } else if (component === "Logo") {
      setImageEdit([...imageEdit, <AddLogo />]);
      setComponent("");
    }
  }, [component]);

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, "image.png");
  };
  return (
    <div className="editor-main-container">
      <div className="main">
        <div className="tools">
          <div className="add-text">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setComponent("Text")}>add text</button>
          </div>
          <div className="color">
            <label htmlFor="color">Color:</label>
            <select
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="black">black</option>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
              <option value="white">White</option>
              <option value="orange">Orange</option>
            </select>
          </div>

          <div className="font-size">
            <label htmlFor="font-size">Font-Size:</label>
            <select
              id="font-size"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value={16}>16</option>
              <option value={18}>18</option>
              <option value={20}>20</option>
              <option value={22}>22</option>
              <option value={24}>24</option>
              <option value={26}>26</option>
              <option value={28}>28</option>
              <option value={30}>30</option>
            </select>
          </div>
          <div>
            <button onClick={() => setComponent("Rectangle")}>Rectangle</button>
          </div>

          <div>
            <button onClick={() => setComponent("Circle")}>Circle</button>
          </div>
          <div>
            <button onClick={() => setComponent("Star")}>Star</button>
          </div>
          <div>
            <button onClick={() => setComponent("Logo")}>Logo</button>
          </div>
          <div>
            <button onClick={handleExport}>Download</button>
          </div>
        </div>
        <div className="image-editor">
          <Stage
            width={window.innerWidth - 950}
            height={window.innerHeight - 150}
            ref={stageRef}
          >
            <Layer>
              <UploadedImage file={file} />
            </Layer>
            {imageEdit &&
              imageEdit.map((item, idx) => {
                return <Layer key={idx}>{item}</Layer>;
              })}
          </Stage>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
