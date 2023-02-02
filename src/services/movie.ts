import axios from 'axios';
import { TMovieCard } from '../types/TypeMovieDB';

export const getMovies = async () => {
  try {
    const { data } = await axios<TMovieCard>(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
