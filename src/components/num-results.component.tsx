import { IMovie } from "../models/movie.model";

interface Props {
  movies: IMovie[];
}

export default function NumResults({movies}: Props) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}
