import { useState } from "react";
import { tempWatchedData } from "../data";
import WatchedSummary from "./watched-summary.component";
import WatchedMovieList from "./watched-movie-list";


export default function WatchedBox() {
    const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);
  
    return (
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <WatchedSummary watchedMovies={watched} />
            <WatchedMovieList watchedMovies={watched} />
          </>
        )}
      </div>
    );
  }