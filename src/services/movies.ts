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
