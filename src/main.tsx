import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import "./styles.css";
import "pages/slider/components/scroll-slider/styles.css"
import "pages/modal/components/modal/styles.css"
import "pages/modal/components/notification/styles.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
