import { useState } from "react";
import "./App.css";
import AnimeCard from "./components/ui/AnimeCard";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimeCard anime={{ title: "adam's anime", release_data: "2024" }} />
    </>
  );
}

export default App;
