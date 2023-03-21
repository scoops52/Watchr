import React from 'react';
import MatchedMovieCards from '../../components/MatchedMovieCards/MatchedMovieCards';
import ResetButton from '../../components/ResetButton/ResetButton';
import MatchedMoviesStyles from './MatchedMovies.module.scss';

const MatchedMovies = () => {
  return (
    <div className={MatchedMoviesStyles.container}>
        <div className={MatchedMoviesStyles.card}>
            <h1>Matched Movies</h1>
            <MatchedMovieCards />
            <ResetButton />
        </div>
        
    </div>
  )
}

export default MatchedMovies