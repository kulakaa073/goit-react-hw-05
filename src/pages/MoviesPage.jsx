import MovieSearch from '../components/MovieSearch/MovieSearch';
import MoviesList from '../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  //if we didnt search anything - dont render MovieList
  const [searchParams] = useSearchParams();
  return (
    <div>
      <p>search bar</p>
      <MovieSearch />
      <p>movies found</p>
      {searchParams.toString() && <MoviesList />}
    </div>
  );
}
