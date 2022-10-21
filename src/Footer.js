import React from 'react';

function Footer(movie) {
  return (
    <div>
        <button className='text-white'><a href='https://api.themoviedb.org/3/movie/popular?api_key=537a4a8b666eff5ba82510cb7241c3da&language=en-US&page=2'><img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} /></a></button>
    </div>
  )
}

export default Footer