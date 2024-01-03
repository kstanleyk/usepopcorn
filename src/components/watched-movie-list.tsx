import { IMovie } from "../models/movie.model";
import WatchedMovie from "./watched-movie.component";

interface Props {
  watchedMovies: IMovie[];
}

export default function WatchedMovieList({ watchedMovies: watched }: Props) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
