import "../css/Favorites.css";
import { useAnimeContext } from "@/contexts/AnimeContext";
import AnimeCard from "@/components/ui/AnimeCard";

function Favorites() {
  const { favorites } = useAnimeContext();

  if (favorites) {
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
      <h2>No favorites animes yet</h2>
      <p>Start adding animes to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorites;
