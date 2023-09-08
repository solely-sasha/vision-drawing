import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [image, setImage] = useState("");

  const [savedPrompts, setSavedPrompts] = useState(
    JSON.parse(localStorage.getItem("prompts")) || []
  );
  const [uploadedImages, setUploadedImages] = useState([]);

  const saveUploadedImage = (imageData) => {
    setUploadedImages((prevImages) => [...prevImages, imageData]);
  };

  const apiKey = "29aa4173c9msh4db9c7d12898c1dp1f3c3fjsnfcc884049fa8";
  const wordApiUrl = "https://random-word-api.p.rapidapi.com/get_word";
  const imageApiUrl =
    "https://api.unsplash.com/photos/random?client_id=NP9biOBTHQhNUQckckVZ3ire4OAsUcaisPMxIq1EDQg";

  useEffect(() => {
    fetchRandomWord();
    fetchRandomImage();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await axios.get(wordApiUrl, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "random-word-api.p.rapidapi.com",
        },
      });
      console.log(response);
      const randomWord = response.data.word;
      setWord(randomWord);
    } catch (error) {
      console.error("Error fetching random word:", error);
    }
  };

  const fetchRandomImage = async () => {
    try {
      if (!word) {
        fetchRandomWord();
        return;
      }

      const timestamp = Date.now();
      const imageResponse = await axios.get(
        `${imageApiUrl}&query=${word}&unique=${timestamp}`
      );

      if (imageResponse.data.urls.length === 0) {
        console.log("No images found. Trying again...");
        fetchRandomWord();
        return;
      }
      const randomImage = imageResponse.data.urls.regular;
      console.log(imageResponse.data);
      setImage(randomImage);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };

  const onSavePrompt = (prompt) => {
    try {
      const existingPrompts = JSON.parse(localStorage.getItem("prompts")) || [];
      const updatedPrompts = [...existingPrompts, prompt];
      localStorage.setItem("prompts", JSON.stringify(updatedPrompts));

      console.log("Prompt saved:", prompt);

      setSavedPrompts(updatedPrompts);
    } catch (error) {
      console.error("Error saving prompt:", error);
    }
  };

  const onDeletePrompt = (index) => {
    try {
      const existingPrompts = JSON.parse(localStorage.getItem("prompts")) || [];
      const updatedPrompts = existingPrompts.filter((_, i) => i !== index);
      localStorage.setItem("prompts", JSON.stringify(updatedPrompts));
      setSavedPrompts(updatedPrompts);
      console.log("Prompt deleted at index:", index);
    } catch (error) {
      console.error("Error deleting prompt:", error);
    }
  };

  const contextValue = {
    word,
    image,
    fetchRandomWord,
    fetchRandomImage,
    onSavePrompt,
    savedPrompts,
    onDeletePrompt,
    setSavedPrompts,
    uploadedImages,
    setUploadedImages,
    saveUploadedImage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
