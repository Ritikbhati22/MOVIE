import React from "react";
import { useEffect } from "react";

function Filter({ movies, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="text-center text-blue-400 mt-4 space-x-8 ">
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(12)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Adventure
      </button>
      <button
        onClick={() => setActiveGenre(16)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Anime
      </button>

      <button
        onClick={() => setActiveGenre(18)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Drama
      </button>
      <button
        onClick={() => setActiveGenre(10751)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Family
      </button>
      <button
        onClick={() => setActiveGenre(14)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Fantasy
      </button>

      <button
        onClick={() => setActiveGenre(27)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Horror
      </button>
      <button
        onClick={() => setActiveGenre(10749)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Romance
      </button>
      <button
        onClick={() => setActiveGenre(53)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Thriller
      </button>
    </div>
  );
}

export default Filter;
