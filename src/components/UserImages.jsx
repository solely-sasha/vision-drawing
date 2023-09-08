import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import "../css/UserImages.css";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default function UserImages() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const { setUploadedImages, saveUploadedImage } = useContext(AppContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setDownloadURL(null);
    setIsUploaded(false);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const storageRef = ref(getStorage(), `images/${selectedFile.name}`);
      const uploadTask = uploadBytes(storageRef, selectedFile);

      uploadTask
        .then(() => {
          getDownloadURL(storageRef).then((url) => {
            console.log("Image URL:", url);
            setDownloadURL(url);
            setIsUploaded(true);

            setUploadedImages((prevImages) => [
              ...prevImages,
              { name: selectedFile.name, url: url },
            ]);
          });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      const imageData = { name: selectedFile.name, url: downloadURL };
      saveUploadedImage(imageData);
    }
  };

  const handleDelete = () => {
    if (selectedFile) {
      const storageRef = ref(getStorage(), `images/${selectedFile.name}`);
      deleteObject(storageRef)
        .then(() => {
          console.log("Image deleted");
          setSelectedFile(null);
          setDownloadURL(null);
          setIsUploaded(false);
        })
        .catch((error) => {
          console.error("Error deleting image:", error);
        });
    }
  };
  return (
    <div className="upload-container">
      <div>
        <h2>Were you inspired?</h2>
        <h2>Show off your work!</h2>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
      {downloadURL && (
        <div className="image-display">
          <img src={downloadURL} alt="Uploaded" className="image-display" />
        </div>
      )}
      {!isUploaded ? (
        <button onClick={handleUpload} className="upload button">
          Upload
        </button>
      ) : (
        <>
          <button onClick={handleSave} className="save button">
            Save
          </button>
          <button onClick={handleDelete} className="delete button">
            Delete
          </button>
        </>
      )}
    </div>
  );
}
