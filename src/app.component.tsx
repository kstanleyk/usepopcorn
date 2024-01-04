import { useEffect, useState } from "react";
import Logo from "./components/logo.component";
import Navbar from "./components/nav-bar.component";
import NumResults from "./components/num-results.component";
import Search from "./components/search.component";
import Main from "./pages/main.component";
import { IMovie } from "./models/movie.model";
import Box from "./components/box.component";
import MovieList from "./components/movie-list.component";
import WatchedSummary from "./components/watched-summary.component";
import WatchedMovieList from "./components/watched-movie-list";
import Loader from "./components/loader.component";
import ErrorMessage from "./components/error.component";

const apikey = "40b7cd83";

export default function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const tempQuery = "christmas prince";

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${query}`
          );

          if (!res.ok) {
            throw new Error("Something went wrong fetching movies");
          }
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("movie not found");
          }

          if (query.length <= 3) {
            setMovies([]);
            setError("");
            return;
          }

          setMovies(data.Search);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            console.error(
              "Caught an error, but not an instance of Error:",
              error
            );
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <WatchedSummary watchedMovies={watched} />
          <WatchedMovieList watchedMovies={watched} />
        </Box>
      </Main>
    </>
  );
}
