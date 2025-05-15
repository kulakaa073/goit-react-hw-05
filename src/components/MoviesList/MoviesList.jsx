import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrending, fetchSearch } from '../../services/movieServices';
import { useSearchParams } from 'react-router-dom';

export default function MoviesList() {
  const [searchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    if (searchParams.toString()) {
      fetchSearch(searchParams.get('query'))
        .then(data => setMoviesList(data.results))
        .finally(() => setIsLoading(false));
    } else {
      fetchTrending()
        .then(data => setMoviesList(data.results))
        .finally(() => setIsLoading(false));
    }
  }, [searchParams]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {moviesList.length > 0 && (
        <ul>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                style={{ display: 'block' }} //change later
                state={location}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
