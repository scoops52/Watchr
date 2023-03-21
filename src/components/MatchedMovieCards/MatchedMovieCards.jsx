import React from 'react';
import { useSelector } from 'react-redux';
import SharedMovieCard from '../SharedMovieCard/SharedMovieCard';
import MatchedMovieCardStyles from './MatchedMovieCards.module.scss';

const MatchedMovieCards = () => {
    const { matchedMovies } = useSelector((state) => state.userTwo)
  return (


    <div className={MatchedMovieCardStyles.container}>
        {matchedMovies.map((movie) => (
            <SharedMovieCard movieOrigin={movie} styleSheet={MatchedMovieCardStyles} />
        // <div className={MatchedMovieCardStyles.movie}>
        //     <div className={MatchedMovieCardStyles.overview}>
        //         <p>{movie.overview}</p>
        //     </div>
        //     <div className={MatchedMovieCardStyles.poster}>
        //         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.Title} />
        //     </div>
        //     <div className={MatchedMovieCardStyles.title}>
        //         {movie.release_date && <span>{movie.release_date.slice(0,4)}</span>}
        //         <h3>{movie.title}</h3>
        //     </div>
        // </div>
        )
        )}
    </div>
  )
}

export default MatchedMovieCards