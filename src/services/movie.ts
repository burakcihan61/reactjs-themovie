import axios from 'axios';

export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async (query: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieTrend = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviePopuler = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieYears = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR&year=2023
`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
