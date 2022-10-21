import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useState,useEffect} from "react";
import axiosClient from 'react';
// import { useEffect } from "react";

function Search(props) {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  
  const changeText = (e) =>{
    // console.log(e)
    setText(e.target.value)
  }

  // useEffect(() => {
  // getMovie();
  // }, [])
  
  const getMovie = (e) =>
  {
    e.preventDefault();
    return axiosClient.get(`https://api.themoviedb.org/3/discover/movie?s=${text}&api_key=537a4a8b666eff5ba82510cb7241c3da`)
    .then((response) =>{
      console.log(response);
      setMovie(response.data.Search)
    })
  }
  return (
    <div className="text-center text-cyan-700">
      <form onSubmit={getMovie}>
      <input
        type="text"
        placeholder=" Search..."
        className="rounded-2xl text-black mr-2 ml-5 pl-2"
        value={text}
        onChange = {changeText}
      />
<SearchIcon />
      </form>
      <div>
        {movie.map((value,index) => {
          return(
            <div className="inline-block pt-4 pb-6 ">
            <div className="object-cover w-72 ml-10 grid ">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                className="rounded-2xl "
              />
              <div className="text-xl text-blue-200 text-center bg-cyan-700 mt-5 rounded-2xl font-serif ">
                {movie.title}
              </div>
            </div>
          </div>
          )
      
        })}
      </div>
    </div>
  );
}

export default Search;
