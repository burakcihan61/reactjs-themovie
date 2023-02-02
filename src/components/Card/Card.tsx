import React, { useEffect, useState } from 'react';
import styles from './card.module.scss';

type TProps = {
  movieId: number;
  movieTitle: string;
  moviePosterPath?: string;
};

const Card: React.FC<TProps> = (props: TProps) => {
  return (
    <>
      <div key={props.movieId} className={styles.movie}>
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${props.moviePosterPath}`}
          alt={props.movieTitle}
        />
        <div className={styles.movieInfos}>
          <h5 className={styles.movieTitle}>{props.movieTitle}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
