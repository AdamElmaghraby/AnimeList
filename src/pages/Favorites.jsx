import "../css/Favorites.css";
import { useAnimeContext } from "@/contexts/AnimeContext";
import AnimeCard from "@/components/ui/AnimeCard";

function Favorites() {
  const { favorites } = useAnimeContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="anime-grid">
          {favorites.map((anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h4>No favorites animes yet</h4>
      <p>Start adding animes to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorites;
