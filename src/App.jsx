import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage"
import DrawingPromptPage from "./pages/DrawingPromptPage"
import GalleryPage from "./pages/GalleryPage"
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
<Header/>
<Routes>
<Route path = "/" element={<LandingPage/>} />
<Route path = "/drawing-prompt" element={<DrawingPromptPage/>} />
<Route path = "/gallery" element={<GalleryPage/>} />
</Routes>
<Footer /> 


    </BrowserRouter>
</div>
  );
}

export default App;