import { useState } from "react";
import { tempMovieData } from "../data";
import Movie from "./movie.component";
import { IMovie } from "../models/movie.model";

export default function MovieList() {
  const [movies, setMovies] = useState<IMovie[]>(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
