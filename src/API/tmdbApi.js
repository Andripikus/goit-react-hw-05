import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGVlOGY0YmMwYjdmMjg0ZDZkNDJiMDAzZDk2ZDFmYyIsIm5iZiI6MTcyNTQzMTAyNS44MjEwNzIsInN1YiI6IjY2ZDZkOTRmMTUyMjE2ZGVmMWRkNTUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jXwxiK1fH9egT1TQz3LOa4DC8V-HQBtPb-_2CVNVP3g";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getTrendingMovies = async () => {
  const response = await apiClient.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await apiClient.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
