import React from 'react';
import styles from './content.module.scss';
import Card from '../Card/Card';
import { TMovieCard } from '../../types/TypeMovieDB';
import Loading from '../Loading/Loading';
import Errors from '../Errors/Errors';

type TProps = {
  loading: boolean;
  movies: TMovieCard[];
  error: string | null;
  noResults: string;
  onClickHandlerTrendList: () => void;
  onClickHandlerPopularList: () => void;
  getMovieYears: () => void;
};

const Content: React.FC<TProps> = (props: TProps) => {
  return (
    <div className={styles.container}>
      <aside className={styles.asideContent}>
        <ul>
          <li onClick={() => props.onClickHandlerTrendList()}>TREND</li>
          <li onClick={() => props.onClickHandlerPopularList()}>POPULER</li>
          <li onClick={() => props.getMovieYears()}>2023 YIL</li>
        </ul>
      </aside>
      <main className={styles.contentMain}>
        {props.error && <Errors>{props.error}</Errors>}
        {props.movies.length === 0 && <Errors>{props.noResults}</Errors>}
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
