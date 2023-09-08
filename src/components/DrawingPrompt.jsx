import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function DrawingPrompt() {
  const { word, image, fetchRandomWord, fetchRandomImage, onSavePrompt } =
    useContext(AppContext);

  const handleGeneratePrompt = () => {
    fetchRandomWord();
    fetchRandomImage();
  };

  const handleSavePrompt = () => {
    if (word && image) {
      onSavePrompt({ word, image });
    }
  };

  return (
    <div className="drawing-prompt">
      <h2>Your Creative Prompt Is Here!</h2>
      <div className="word-display">
        <h2>
          Random Word: <span>{word}</span>
        </h2>
      </div>
      <div className="image-display">
        <h2>Random Image:</h2>
        {(image && <img src={image} alt="Drawing Prompt" />) || (
          <h2 className="image-message">Sorry, no image found. Try again </h2>
        )}
      </div>
      <div className="button-group">
        <button
          className="generate-prompt button"
          onClick={handleGeneratePrompt}
        >
          Generate New Prompt
        </button>
        <button className="save-prompt button" onClick={handleSavePrompt}>
          Save Prompt
        </button>
      </div>
    </div>
  );
}
