import { Button } from "@/components/ui/button";
import "../../css/AnimeCard.css";
import { useAnimeContext } from "@/contexts/AnimeContext";
import { toast } from "sonner";
import { format } from "date-fns";

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
          <div>
            <h3>{anime.title}</h3>
            <p className="score">★ {anime.score || "N/A"}</p>
            <p>
              <strong>Episodes:</strong> {anime.episodes || "N/A"}
            </p>
            <p>
              <strong>Season:</strong> {anime.season || "N/A"}
            </p>
            <p className="anime-synopsis">
              {anime.synopsis || "No synopsis available."}
            </p>
          </div>
          <div className="btn-contain">
            {anime.trailer?.url && (
              <Button
                size="icon"
                variant="outline"
                className="trailer-btn"
                href={anime.trailer.url}
              >
                <a href={anime.trailer.url} target="_blank">
                  ▶︎
                </a>
              </Button>
            )}
            <Button
              size="icon"
              variant="outline"
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={(event) => {
                onFavoriteClick(event);
                toast(
                  `${anime.title} has been ${
                    favorite ? "removed from" : "added to"
                  } favorites.`,
                  {
                    description: format(
                      new Date(),
                      "EEEE, MMMM dd, yyyy 'at' h:mm a"
                    ),
                    action: {
                      label: "Undo",
                      onClick: () => {
                        if (favorite) {
                          addToFavorites({ ...anime, id: animeId }); // Re-add if it was removed
                        } else {
                          removeFromFavorites(animeId); // Remove if it was added
                        }
                      },
                    },
                  }
                );
              }}
            >
              ❤︎
            </Button>
          </div>
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
