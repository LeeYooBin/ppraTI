import axios from "axios";

const searchURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const searchByQuery = async (query, onSuccess, onError) => {
  try {
    const movies = await axios.get(`${searchURL}search/movie?${apiKey}&query=${query}`);
    const series = await axios.get(`${searchURL}search/tv?${apiKey}&query=${query}`);
    const persons = await axios.get(`${searchURL}search/person?${apiKey}&query=${query}`);

    const result = [
      ...movies.data.results,
      ...series.data.results,
      ...persons.data.results
    ];

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
}

export const searchByCategory = async (isMovie, category, onSuccess, onError) => {
  try {
    const type = isMovie ? "movie" : "tv";
    const response = await axios.get(`${searchURL}${type}/${category}?${apiKey}&language=en-US&page=1`);
    onSuccess(response.data.results);
  } catch (e) {
    onError(e);
  }
}

export const searchGenres = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${searchURL}genre/list?${apiKey}`);
    onSuccess(response.data.genres);
  } catch (e) {
    onError(e);
  }
}

export const searchByGenreId = async (genreId, onSuccess, onError) => {
  try {
    const movies = await axios.get(`${searchURL}discover/movie?${apiKey}&with_genres=${genreId}`);
    const series = await axios.get(`${searchURL}discover/tv?${apiKey}&with_genres=${genreId}`);

    const result = [
      ...movies.data.results,
      ...series.data.results
    ];

    console.log(result);

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
}

export const searchByTrending = async (type, onSuccess, onError) => {
  try {
    const response = await axios.get(`${searchURL}trending/${type}/day?${apiKey}&language=en-US`);
    onSuccess(response.data.results);
  } catch (e) {
    onError(e);
  }
}
