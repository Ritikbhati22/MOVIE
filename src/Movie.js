import React from "react";

function Movie({ movie}) {
  return (
    <div className="inline-block pt-4 pb-6 ">
      <div className="object-cover w-72 ml-10 grid ">
        <a href={"https://2embed.org/embed/movie?tmdb=" + movie.id}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          className="rounded-2xl "
        /></a>
        <div className="text-xl text-blue-200 text-center bg-cyan-700 mt-5 rounded-2xl font-serif ">
          {movie.title}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Movie;
