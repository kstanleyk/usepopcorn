import { useState } from "react";
import Movie  from "./movie.component";
import {tempMovieData} from '../data/temp-data'

export default function MovieList() {
    const [movies, setMovies] = useState(tempMovieData);
    return (
      <ul className="list">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    );
  }