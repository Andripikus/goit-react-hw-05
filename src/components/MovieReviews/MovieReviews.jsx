import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../API/tmdbApi";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong: {error}</h2>}
      <ul className={css.reviewList}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>Author: {review.author}</h3>
              <p className={css.reviewContent}>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </ul>
    </div>
  );
}
