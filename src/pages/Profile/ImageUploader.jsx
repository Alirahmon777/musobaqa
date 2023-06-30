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
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
};

export default ImageUploader;
