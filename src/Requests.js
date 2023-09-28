const API_KEY = "505302d35543424f40656dbf77bcb50f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
};

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=505302d35543424f40656dbf77bcb50f&language=en-US
