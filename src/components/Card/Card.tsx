import React, { useEffect } from 'react';
import axios from 'axios';
import { Root, Result } from '../../types/TypeMovieDB';
import styles from './card.module.scss';

const Card: React.FC = () => {
  const [movies, setMovies] = React.useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr&page=1`
      );
      setMovies(result.data.results);
    };
    fetchData();
  }, []);

  console.log(movies);

  return (
    <>
      {movies.map((movie: Result) => {
        return (
          <div key={movie.id} className={styles.movie}>
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
            <div className={styles.movieInfos}>
              <h5 className={styles.movieTitle}>{movie.title}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
