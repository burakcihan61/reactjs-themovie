import React from 'react';
import styles from './listtrend.module.scss';
import { TMovieCard } from '../../types/TypeMovieDB';
import { getMovieYears } from '../../services/movie';

type TProps = {
  movies: TMovieCard[];
  setMovies: React.Dispatch<React.SetStateAction<TMovieCard[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setNoResults: React.Dispatch<React.SetStateAction<string>>;
};

const ListYear = (props: TProps) => {
  const onClickHandlerYearsList = () => {
    props.setLoading(true);
    setTimeout(() => {
      getMovieYears()
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
      <h4 className={styles.list} onClick={() => onClickHandlerYearsList()}>
        Yıl 2023
      </h4>
    </>
  );
};

export default ListYear;
