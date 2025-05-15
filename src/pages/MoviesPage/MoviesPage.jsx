import MovieSearch from '../../components/MovieSearch/MovieSearch';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  //if we didnt search anything - dont render MovieList
  const [searchParams] = useSearchParams();
  return (
    <div>
      <MovieSearch />
      {searchParams.toString() && <MoviesList />}
    </div>
  );
}
