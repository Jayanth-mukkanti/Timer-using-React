import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css";
import MovieCards from './MovieCards';

function App() {

  const [popularMovies, setPopularMovies] = useState([])
  const [movieName, setMovieName] = useState("")
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
      .then((res) => {
        setPopularMovies(res.data.results)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((res) => {
        setSearchedMovies(res.data.results)
      }).catch((err) => {
        console.log(err);
      })
  }, [movieName])

  return (
    <>
      <div>
        <h1> Movies Results </h1>
        <input id="inputValue"
          placeholder='Search Movies'
          value={movieName}
          onChange={(e) => { setMovieName(e.target.value) }}
        />
      </div>
      <div id='movie-wrapper'>
        {movieName == "" ? popularMovies.map((item, i) => {
          return (
            <MovieCards 
            poster = {item.poster_path}
            title = {item.title}
            Rating = {item.vote_average}
            ReleaseDate = {item.release_date}
            />
            )
        }) : searchedMovies.map((item, i) => {
          return (
            <MovieCards 
            poster = {item.poster_path}
            title = {item.title}
            Rating = {item.vote_average}
            ReleaseDate = {item.release_date}
            />)
        })}
      </div>
    </>
  )
}

export default App