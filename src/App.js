import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";
import Search from "./Search";

function App() {
  const API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=537a4a8b666eff5ba82510cb7241c3da";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    GetMovies();
  }, []);

  const GetMovies = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setMovies(data.results);
  
  };

  return (
    <div className="bg-neutral-800 flex-row-reverse">
      <h1 className=" pl-2 text-3xl pt-4 pb-4 text-red-600 text-center font-bold font-serif">
        VEGA<span className="text-cyan-800">MOVIES</span>
      </h1>
<Search />
      <div>
        {movies.map((film) => {
          return <Movie key={film.id} movie={film} />;
        })}
      </div>
    </div>
  );
}

export default App;
