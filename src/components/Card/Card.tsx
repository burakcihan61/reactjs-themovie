import React from 'react';
import styles from './card.module.scss';

type TProps = {
  movieId: number;
  movieTitle: string;
  moviePosterPath: string;
  movieImage?: string;
};

const Card: React.FC<TProps> = (props: TProps) => {
  return (
    <>
      <div key={props.movieId} className={styles.movie} data-testid="movie-1">
        <img src={`${props.movieImage}${props.moviePosterPath}`} alt={props.movieTitle} />
        <div className={styles.movieInfos}>
          <h5 className={styles.movieTitle}>{props.movieTitle}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
