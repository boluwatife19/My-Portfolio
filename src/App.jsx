import React from "react";
import "./index.css";
import { FloatingNavDemo } from "./test.jsx";
import BackG from "./components/Pages/Home.jsx";
import Success from "./components/Pages/FormSuccess.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BackG />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
