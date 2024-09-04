import { Link, Outlet } from "react-router-dom";
import css from "./MovieInfo.module.css";

export default function MovieInfo({ movieDetails, onGoBack }) {
  const { title, overview, poster_path } = movieDetails;
  const defaultImg = "https://via.placeholder.com/250";

  return (
    <div className={css.movieInfo}>
      <button className={css.backButton} onClick={onGoBack}>
        Go back
      </button>
      <div className={css.infoContainer}>
        <img
          className={css.movieImage}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
        <div className={css.movieDetails}>
          <h2 className={css.movieTitle}>{title}</h2>
          <p className={css.movieOverview}>{overview}</p>
        </div>
      </div>
      <nav className={css.movieNav}>
        <Link to="cast" className={css.link}>
          Cast
        </Link>
        <Link to="reviews" className={css.link}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
