import React from "react";
import "./index.css";
import BackG from "./components/Pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./components/Pages/Pdf.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BackG />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
