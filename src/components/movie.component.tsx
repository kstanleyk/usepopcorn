import { IMovie } from "../models/movie.model";

interface Props {
  movie: IMovie;
}

export default function Movie({ movie }: Props) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
