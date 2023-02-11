import React from 'react';
import styles from './listtrend.module.scss';
import { getMovieTrend } from '../../services/movie';
import { TMovieCard } from '../../types/TypeMovieDB';

type TProps = {
  movies: TMovieCard[];
  setMovies: React.Dispatch<React.SetStateAction<TMovieCard[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setNoResults: React.Dispatch<React.SetStateAction<string>>;
};

const ListTrend = (props: TProps) => {
  const onClickHandlerTrendList = () => {
    props.setLoading(true);
    setTimeout(() => {
      getMovieTrend()
        .then((res) => {
          props.setLoading(false);
          props.setMovies(res.results);
        })
        .catch((err) => {
          props.setLoading(false);
          props.setError(err.message);
          props.setNoResults('No results found');
        });
    }, 1000);
  };
  return (
    <>
      <h4 onClick={() => onClickHandlerTrendList()} className={styles.list}>
        trend
      </h4>
    </>
  );
};
export default ListTrend;
