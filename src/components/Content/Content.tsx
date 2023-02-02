import React, { useEffect, useState } from 'react';
import styles from './content.module.scss';
import Card from '../Card/Card';
import { TMovieCard } from '../../types/TypeMovieDB';
import { getMovies } from '../../services/movie';
import Loading from '../Loading/Loading';

const Content: React.FC = () => {
  const [movies, setMovies] = useState<TMovieCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getMovies().then((res) => {
        setLoading(false);
        setMovies(res);
      });
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.asideContent}>
        <ul>
          <li>Trend</li>
          <li>Popüler</li>
          <li>2023 Filmleri</li>
          <li>2022 Filmleri</li>
          <li>2021 Filmleri</li>
          <li>2020 Filmleri</li>
        </ul>
      </aside>
      <main className={styles.contentMain}>
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie: TMovieCard) => {
            return (
              <Card
                key={movie.id}
                movieId={movie.id}
                movieTitle={movie.title}
                moviePosterPath={movie.poster_path}
              />
            );
          })
        )}
      </main>
    </div>
  );
};

export default Content;
