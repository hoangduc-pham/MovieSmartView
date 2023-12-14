import React, { useEffect, useState } from "react";
import "./App.css";
import { baseIMG, getMovieList, searchMovie } from "./API";
import ReactPaginate from "react-paginate";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image"  src={`${baseIMG}/${movie.poster_path}`}></img>
          <div className="Movie-date">release : {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async(q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  };

  const handlePage = (data) =>{
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>JEREMYA'S MOVIE</h1>
        <input
          onChange={({ target }) => search(target.value)}
          placeholder="Masukkan Judul Film"
          className="Movie-search"
        />
        <div className="Movie-container">
          <PopularMovieList/>          
        </div>
        <div>
          <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={10}
          marginPagesDisplayed={0}
          pageRangeDisplayed={4}
          onPageChange={handlePage}
          />

          </div>
      </header>

  
    </div>
  );
};

export default App;

/*
==========================================================================
Map(isinya function)
    
    isi div tersebut adalah  mapping langsung si popularMovies() => di dalam kurung ini terdapat (movie, i), ini adalah parameter.
      = kalau mapping dijadikan ke array, yang aku tangkap 
        -movie adalah si isi array dari si object 'popularMovies'
        -i adalah urutan index si array ke 0,1, ... nya
    yang akan dibungkus oleh div (movie-wrapper).
          --Key = untuk mengidentifikasikan agar kita tahu items mana yang berubah/diambil dari object. Key harus diberikan ke element di dalam array[di dalam map]


*/