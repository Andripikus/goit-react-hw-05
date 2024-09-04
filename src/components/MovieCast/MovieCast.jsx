import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../API/tmdbApi";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong: {error}</h2>}
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.cast_id} className={css.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : "https://via.placeholder.com/150x225?text=No+Image"
              }
              alt={actor.name}
              className={css.castImage}
            />
            <p className={css.castName}>{actor.name}</p>
            <p className={css.characterName}>as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
