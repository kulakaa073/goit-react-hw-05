import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movieServices';
import { useEffect, useState } from 'react';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(data => setReviewsList(data.results))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {reviewsList.length > 0 &&
        reviewsList.map(review => (
          <div key={review.id}>
            <p>Author: {review.author}</p>
            <p>Date: {review.created_at}</p>
            <p>{review.content}</p>
          </div>
        ))}
    </div>
  );
}
