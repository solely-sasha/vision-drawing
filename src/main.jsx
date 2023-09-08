import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.jsx";
import { AppProvider } from "./components/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
