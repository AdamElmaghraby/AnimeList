import { Button } from "@/components/ui/button";
import "../../css/AnimeCard.css";

function AnimeCard({ anime }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="anime-card">
      <div className="anime-poster">
        <img src={anime.url} alt={anime.title} />
        <div className="anime-overlay">
          <Button
            size="icon"
            className="favorite-btn"
            onClick={onFavoriteClick}
          >
            ❤︎
          </Button>
        </div>
      </div>
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>{anime.release_date}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
