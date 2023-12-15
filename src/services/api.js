import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '38073b7a97af15277e125ef03e31899b';

export const fetchMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieByCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.cast;
};
