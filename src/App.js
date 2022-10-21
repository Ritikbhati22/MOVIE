import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";
import Search from "./Search";
import Filter from "./Filter";
import Footer from "./Footer";

function App() {
  const API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=537a4a8b666eff5ba82510cb7241c3da";
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    GetMovies();
  }, []);

  const GetMovies = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
    setFiltered(data.results);
  };

  return (
    <div className="bg-neutral-800 flex-row-reverse">
      <h1 className=" pl-2 text-3xl pt-4 pb-4 text-red-600 text-center font-bold font-serif">
        VEGA<span className="text-cyan-800">MOVIES</span>
      </h1>
      <Search />
      <Filter
        movies={movies}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div>
        {filtered.map((film) => {
          return <Movie key={film.id} movie={film} />;
        })}
      </div><Footer/>
    </div>
  );
}

export default App;
