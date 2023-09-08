import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import ImageModal from "./ImageModal";
import "../css/UserImages.css";

export default function UploadedImageGallery() {
  const { uploadedImages } = useContext(AppContext);
  const [modalSrc, setModalSrc] = useState(null);

  const openModal = (src) => {
    setModalSrc(src);
  };

  const closeModal = () => {
    setModalSrc(null);
  };

  return (
    <div className="gallery">
      <section className="uploaded-images-section">
        <h2> User Inspired Images</h2>
        <div className="images-container">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image">
              <img
                src={image.url}
                alt={`Uploaded Image ${index}`}
                onClick={() => openModal(image.url)}
              />
            </div>
          ))}
        </div>
      </section>
      {modalSrc && <ImageModal src={modalSrc} onClose={closeModal} />}
    </div>
  );
}
