import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import "../css/Gallery.css";
import ImageModal from "./ImageModal";

export default function Gallery() {
  const { savedPrompts, onDeletePrompt, setSavedPrompts } =
    useContext(AppContext);
  const [modalSrc, setModalSrc] = useState(null);

  const openModal = (src) => {
    setModalSrc(src);
  };

  const closeModal = () => {
    setModalSrc(null);
  };

  useEffect(() => {
    const savedPromptsFromLocalStorage = JSON.parse(
      localStorage.getItem("prompts")
    );
    if (savedPromptsFromLocalStorage) {
      setSavedPrompts(savedPromptsFromLocalStorage);
    }
  }, []);

  return (
    <div className="gallery">
      <section className="prompts-section">
        <h2>Saved Prompts</h2>
        <div className="prompts-container">
          {savedPrompts.map((prompt, index) => (
            <div key={index} className="prompt">
              <p>Word: {prompt.word}</p>
              <img
                src={prompt.image}
                alt={`Prompt ${index}`}
                onClick={() => openModal(prompt.image)}
              />
              <button
                className="delete-prompt button"
                onClick={() => onDeletePrompt(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
      {modalSrc && <ImageModal src={modalSrc} onClose={closeModal} />}
    </div>
  );
}
