import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomMovie, removeMovie, userOneSubmit } from '../features/moviesListSlice';
import { getRandomLikedMovie, likeMovie, matchMovie, removeMovieFromLiked } from '../features/userTwoSlice';
import { openModal, closeModal } from '../features/matchModalSlice';
import { useEffect } from 'react';

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
   

   if (likedMovies.length === 0) {
    return (
        <div>
            <h2>No Movies Left</h2>
        </div>
    )
   }
   if (!randomMovie) {
    return <div>Loading</div>
   }

  return (
    <div>
        <div className="movie">
            <div>
                <p>{randomLikedMovie.overview}</p>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${randomLikedMovie.poster_path}`} alt={randomLikedMovie.Title} />
            </div>
            <div>
                {randomLikedMovie.release_date && <span>{randomLikedMovie.release_date.slice(0,4)}</span>}
                <h3>{randomLikedMovie.title}</h3>
            </div>
        </div>
        <div>
                <button onClick={handleDislike}>Dislike</button>
                <button onClick={handleLike}>Like</button>
         </div>
            
    </div>
  )
}

export default UserTwo