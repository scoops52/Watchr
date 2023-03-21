import React from 'react';

const SharedMovieCard = ({movieOrigin, styleSheet}) => {
  return (

    <div className={styleSheet.movie}>
        <div className={styleSheet.overview}>
            <p>{movieOrigin.overview}</p>
        </div>
        <div className={styleSheet.poster}>
            <img src={`https://image.tmdb.org/t/p/w500/${movieOrigin.poster_path}`} alt={movieOrigin.Title} />
        </div>
        <div className={styleSheet.title}>
            {movieOrigin.release_date && <span>{movieOrigin.release_date.slice(0,4)}</span>}
            <h3>{movieOrigin.title}</h3>
        </div>
    </div>
   
     
        

  )
}

export default SharedMovieCard