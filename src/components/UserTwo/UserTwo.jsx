import React from 'react';
import UserTwoStyles from './UserTwo.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomMovie, removeMovie, userOneSubmit } from '../../features/moviesListSlice';
import { getRandomLikedMovie, likeMovie, matchMovie, removeMovieFromLiked, renderMatchedMovies } from '../../features/userTwoSlice';
import { openModal, closeModal } from '../../features/matchModalSlice';
import { useEffect } from 'react';
import Button from '../Button/Button';
import SharedMovieCard from '../SharedMovieCard/SharedMovieCard';

const UserTwo = () => {
    const { movies, randomMovie, } = useSelector((state) => state.moviesList);
    const { likedMovies, matchedMovies, randomLikedMovie } = useSelector((state) => state.userTwo)
    const dispatch = useDispatch();
   
// ?????

   useEffect(() => {
    if (likedMovies.length > 0) {
        dispatch(getRandomLikedMovie(likedMovies));
    }
   },[likedMovies])

//    ??????

   const handleLike = (e) => {
    dispatch(likeMovie(randomLikedMovie));
    dispatch(removeMovieFromLiked(randomLikedMovie.id));
    
   };

   const handleDislike = (e) => {
    dispatch(removeMovieFromLiked(randomLikedMovie.id));
   }

   useEffect(() => {
    if (matchedMovies.length > 0) {
        dispatch(openModal());
    }
    },[matchedMovies])
   
    const handleMatchedMovies = (e) => dispatch(renderMatchedMovies());

   if (likedMovies.length === 0) {
    return (
        <div>
            <h2>No Movies Left</h2>
            <p> I hope you found something to watch!</p>
            <Button btnText='See All Matched Movies' onClick={handleMatchedMovies} />
            {/* <button onClick={handleMatchedMovies}>See Matched Movies</button> */}
        </div>
    )
   }
   if (!randomMovie) {
    return <div>Loading</div>
   }

  return (
    <div className={UserTwoStyles.container}>
        <p className={UserTwoStyles.instructions}>
                        Hover over each movie for more info.
                    </p>
        <SharedMovieCard movieOrigin={randomLikedMovie} styleSheet={UserTwoStyles} />
        {/* <div className={UserTwoStyles.movie}>
            <div className={UserTwoStyles.overview}>
                <p>{randomLikedMovie.overview}</p>
            </div>
            <div className={UserTwoStyles.poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${randomLikedMovie.poster_path}`} alt={randomLikedMovie.Title} />
            </div>
            <div className={UserTwoStyles.title}>
                {randomLikedMovie.release_date && <span>{randomLikedMovie.release_date.slice(0,4)}</span>}
                <h3>{randomLikedMovie.title}</h3>
            </div>
        </div> */}
        <div className={UserTwoStyles.buttons}>
                <Button btnText="Dislike" onClick={handleDislike} color='red'/>
                <Button btnText="Like" onClick={handleLike} color='green'/>
         </div>
         
    </div>
  )
}

export default UserTwo