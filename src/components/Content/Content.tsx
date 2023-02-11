import React, { useEffect, useState } from 'react';
import styles from './content.module.scss';
import Card from '../Card/Card';
import { TMovieCard } from '../../types/TypeMovieDB';
import { getMovies, getMovieTrend } from '../../services/movie';
import Loading from '../Loading/Loading';
import Errors from '../Errors/Errors';
import ListTrend from '../List/ListTrend';
import ListPopuler from '../List/ListPopuler';
import ListYear from '../List/ListYear';

type TProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  movies: TMovieCard[];
  setMovies: React.Dispatch<React.SetStateAction<TMovieCard[]>>;
};

const Content: React.FC<TProps> = (props: TProps) => {
  const [error, setError] = useState<string | null>(null);
  const [noResults, setNoResults] = useState('');

  useEffect(() => {
    props.setLoading(true);
    setTimeout(() => {
      getMovies()
        .then((res) => {
          props.setLoading(false);
          props.setMovies(res.results);
        })
        .catch((err) => {
          props.setLoading(false);
          setError(err.message);
          setNoResults('No results found');
        });
    }, 1500);
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.asideContent}>
        <ul>
          <li>
            <ListTrend
              movies={props.movies}
              setMovies={props.setMovies}
              setLoading={props.setLoading}
              setError={setError}
              setNoResults={setNoResults}
            />
          </li>
          <li>
            <ListPopuler
              movies={props.movies}
              setMovies={props.setMovies}
              setLoading={props.setLoading}
              setError={setError}
              setNoResults={setNoResults}
            />
          </li>
          <li>
            <ListYear
              movies={props.movies}
              setMovies={props.setMovies}
              setLoading={props.setLoading}
              setError={setError}
              setNoResults={setNoResults}
            />
          </li>
        </ul>
      </aside>
      <main className={styles.contentMain}>
        {error && <Errors>{error}</Errors>}
        {props.movies.length === 0 && <Errors>{noResults}</Errors>}
        {props.loading ? (
          <Loading />
        ) : (
          props.movies.map((movie: TMovieCard) => (
            <Card
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              movieImage={process.env.REACT_APP_IMAGE_URL}
              moviePosterPath={movie.poster_path}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Content;
