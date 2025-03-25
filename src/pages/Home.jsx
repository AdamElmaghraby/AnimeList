import AnimeCard from "@/components/ui/AnimeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const animes = [
    { id: 1, title: "demon slayer", release_date: "2020" },
    { id: 2, title: "fairy tale", release_date: "2020" },
    { id: 3, title: "death note", release_date: "2020" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <Input
          placeholder="Search Anime Library"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></Input>
        <Button type="submit" className="search-button">
          Search
        </Button>
      </form>

      <div className="animes-grid">
        {animes.map((anime) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
