import Movie from "./movie.component";
import { IMovie } from "../models/movie.model";

interface Props {
  movies: IMovie[];
}

export default function MovieList({ movies }: Props) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
