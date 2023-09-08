import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import DrawingPromptPage from "./pages/DrawingPromptPage";
import GalleryPage from "./pages/GalleryPage";
import "./css/App.css";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import UploadImagesPage from "./pages/UploadImagesPage";
import UserImagesGalleryPage from "./pages/UserImagesGalleryPage";

const firebaseConfig = {
  apiKey: "AIzaSyAmLdMBIV8nrfrojFLS-wQNcbojg1nDSLE",
  authDomain: "vision-drawing.firebaseapp.com",
  projectId: "vision-drawing",
  storageBucket: "vision-drawing.appspot.com",
  messagingSenderId: "625633320375",
  appId: "1:625633320375:web:34cceb71b5ef8f14231c32",
  measurementId: "G-FPSV4DEQX1",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/drawing-prompt" element={<DrawingPromptPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/upload-images" element={<UploadImagesPage />} />
          <Route
            path="/user-gallery"
            element={<UserImagesGalleryPage storage={storage} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
