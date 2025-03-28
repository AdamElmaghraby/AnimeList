import { Button } from "@/components/ui/button";
import "../../css/AnimeCard.css";
import { useAnimeContext } from "@/contexts/AnimeContext";

function AnimeCard({ anime }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
  const animeId = anime.mal_id || anime.id || `${anime.title}-${anime.year}`; // Generate unique ID
  const favorite = isFavorite(animeId);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(animeId);
    else addToFavorites({ ...anime, id: animeId }); // Ensure the anime object has the unique ID
  }

  return (
    <div className="anime-card">
      <div className="anime-poster">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className="anime-overlay">
          <Button
            size="icon"
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤︎
          </Button>
        </div>
      </div>
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>{anime.year}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
