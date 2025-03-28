import { useState } from "react";
import "./css/App.css";
import AnimeCard from "./components/ui/AnimeCard";
import { Button } from "@/components/ui/button";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavBar from "./components/ui/NavBar";
import { AnimeProvider } from "./contexts/AnimeContext";

function App() {
  return (
    <AnimeProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </AnimeProvider>
  );
}

export default App;
