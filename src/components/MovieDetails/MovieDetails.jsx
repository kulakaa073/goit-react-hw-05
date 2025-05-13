export default function MovieDetails({ movieInfo }) {
  const genres = movieInfo.genres.map(genre => genre.name).join(', ');

  return (
    <ul>
      <li>
        <p>Name: {movieInfo.title}</p>
      </li>
      <li>
        <p>Rating: {movieInfo.popularity}</p>
      </li>
      <li>
        <p>Overview: {movieInfo.overview}</p>
      </li>
      <li>
        <p>Genres: {genres}</p>
      </li>
    </ul>
  );
}
