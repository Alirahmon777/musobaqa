import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
   
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {selectedImage && <img width="200px" height="200px"  src={selectedImage} style={{
        borderRadius:"50%"
      }} alt="Selected" />}
    </div>
  );
};

export default ImageUploader;
