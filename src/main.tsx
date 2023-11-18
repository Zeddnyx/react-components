import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import "./styles.css";
import "pages/animations/styles.css"
import "pages/slider/styles.css"
import "pages/modal/styles.css"
import "pages/paginations/styles.css"
import "pages/form/styles.css"
import "pages/random/styles.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
