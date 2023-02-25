import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, likeMovie, dislikeMovie, removeMovie } from '../features/moviesListSlice';




import React, { useEffect, useState } from 'react';

const MovieCard = () => {
    const { movies, randomMovie, likedMovies, dislikedMovies } = useSelector((state) => state.moviesList);
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
    dispatch(removeMovie(randomMovie.id)).then(() => {
        dispatch(getRandomMovie(movies));
  });
}
   if (movies.length === 0) {
    return (
        <div>
            <h2>No Movies Left</h2>
            <h2>Liked: {likedMovies.length > 0 ? likedMovies.map((movie) => movie.title) : 'no liked movies'}</h2>
            <hr/>
            <h2>Disliked: {dislikedMovies.length > 0 ? dislikedMovies.map((movie) => movie.title) : 'no disliked movies'}</h2>
        </div>
    )
   }
  return (
    <div>
        <div className="movie">
            <div>
                <p>{randomMovie.release_date}</p>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`} alt={randomMovie.Title} />
            </div>
            <div>
                <span>{randomMovie.id}</span>
                <h3>{randomMovie.title}</h3>
            </div>
        </div>
        <div>
                <button onClick={handleDisike}>Dislike</button>
                <button onClick={handleLike}>Like</button>
            </div>
            <div>
                <h2>Liked: {likedMovies.length > 0 ? likedMovies.map((movie) => movie.title) : 'no liked movies'}</h2>
                <h2>Disliked: {dislikedMovies.length > 0 ? dislikedMovies.map((movie) => movie.title) : 'no disliked movies'}</h2>    
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