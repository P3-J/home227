import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Box, Link, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./modules/entrypage";
import CookieClicker from "./modules/game";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/enter" element={<CookieClicker />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
