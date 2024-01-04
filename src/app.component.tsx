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

const apikey = "40b7cd83";

export default function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [watched, setWatched] = useState([]);

  const query = "interstellar";

  useEffect(function () {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watchedMovies={watched} />
          <WatchedMovieList watchedMovies={watched} />
        </Box>
      </Main>
    </>
  );
}
