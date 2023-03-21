import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, dislikeMovie, removeMovie } from '../../features/moviesListSlice';
import { likeMovie } from '../../features/userTwoSlice';
import MovieCardStyles from './MovieCard.module.scss';





import React, { useEffect} from 'react';
import Button from "../Button/Button";
import SharedMovieCard from "../SharedMovieCard/SharedMovieCard";

const MovieCard = () => {
    const { movies, randomMovie } = useSelector((state) => state.moviesList);
   
   
    const dispatch = useDispatch();
   
   useEffect(() => {
    if (movies.length > 0) {
        dispatch(getRandomMovie(movies))
    }
   },[dispatch, movies])

   const handleLike = (e) => {
    dispatch(likeMovie(randomMovie));
    dispatch(removeMovie(randomMovie.id));
    
   };

  const handleDislike = (e) => {
    dispatch(dislikeMovie(randomMovie));
    dispatch(removeMovie(randomMovie.id));
  };


  
   
   if (!randomMovie) {
    return <div>Loading</div>
   }


  return (
    
    <div className={MovieCardStyles.container}>
        <p className={MovieCardStyles.instructions}>
            Hover over each movie for more info.
        </p>
        <SharedMovieCard movieOrigin={randomMovie} styleSheet={MovieCardStyles} />
        <div className={MovieCardStyles.buttons}>
                <Button btnText="Dislike" onClick={handleDislike} color='red'/>
                <Button btnText="Like" onClick={handleLike} color='green'/>
         </div>
         
         
            
    </div>
  )
}

export default MovieCard

