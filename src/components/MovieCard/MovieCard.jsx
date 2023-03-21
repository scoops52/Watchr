import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, dislikeMovie, removeMovie, userOneSubmit, toggleRoundOne } from '../../features/moviesListSlice';
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
   },[movies])

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
        {/* <div className={MovieCardStyles.movie}>
            <div className={MovieCardStyles.overview}>
                <p>{randomMovie.overview}</p>
            </div>
            <div className={MovieCardStyles.poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`} alt={randomMovie.Title} />
            </div>
            <div className={MovieCardStyles.title}>
                {randomMovie.release_date && <span>{randomMovie.release_date.slice(0,4)}</span>}
                <h3>{randomMovie.title}</h3>
            </div>
        </div> */}
        <div className={MovieCardStyles.buttons}>
                <Button btnText="Dislike" onClick={handleDislike} color='red'/>
                <Button btnText="Like" onClick={handleLike} color='green'/>
         </div>
         
         
            
    </div>
  )
}

export default MovieCard



// const [movie, setMovie] = useState({})
//    const { movies } = useSelector((state) => state.moviesList);
//    const getMovie = (movies) => {
//     return movies[Math.floor(Math.random() * 3)];
//    };
   
//    useEffect(() => {
//     setMovie(getMovie(movies));
//     console.log(movie);
//     },
//     [movies]);