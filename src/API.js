import axios from "axios";

const apiKey = "1e5394478d4d6e30afbcdb1a38d78dce";
const baseUrl = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTUzOTQ0NzhkNGQ2ZTMwYWZiY2RiMWEzOGQ3OGRjZSIsInN1YiI6IjY1NzgzMDg0NGJmYTU0NWQwMTBhMzRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eWjS_-kTNKVbYM5w6kXL4AQImildSReg6L4GbLVwn4o";
export const baseIMG = "https://image.tmdb.org/t/p/original";


export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
  console.log(movie)
  return movie.data.results;
};
//memanggil listing" dari API movie


export const searchMovie = async (q) => {
  const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
  );
  return search.data;
};
