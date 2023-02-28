import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, dislikeMovie, removeMovie, userOneSubmit } from '../features/moviesListSlice';
import { likeMovie, renderUserTwo } from '../features/userTwoSlice';





import React, { useEffect, useState } from 'react';

const MovieCard = () => {
    const { movies, randomMovie, dislikedMovies } = useSelector((state) => state.moviesList);
    const { nameOne, nameTwo } = useSelector((state) => state.params);
    const { likedMovies } = useSelector((state) => state.userTwo)
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

  const handleDisike = (e) => {
    dispatch(dislikeMovie(randomMovie));
    dispatch(removeMovie(randomMovie.id));
  };


  const handleUserTwoStart = (e) => {
    dispatch(renderUserTwo())
  };

   if (movies.length === 0) {
    return (
        <div>
            <h2>No Movies Left</h2>
            <h3>{nameTwo}'s turn.</h3>
            <button onClick={handleUserTwoStart}>Get Movies</button>
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
                <p>{randomMovie.overview}</p>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`} alt={randomMovie.Title} />
            </div>
            <div>
                {randomMovie.release_date && <span>{randomMovie.release_date.slice(0,4)}</span>}
                <h3>{randomMovie.title}</h3>
            </div>
        </div>
        <div>
                <button onClick={handleDisike}>Dislike</button>
                <button onClick={handleLike}>Like</button>
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