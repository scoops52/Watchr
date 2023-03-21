import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ModalMovieCardStyles from './ModalMovieCard.module.scss';

import SharedMovieCard from '../SharedMovieCard/SharedMovieCard';


const ModalMovieCard = () => {
    const { matchedMovies } = useSelector((state) => state.userTwo);
    
    
    
    const matchCard = matchedMovies[matchedMovies.length - 1];
    

   
  return (
    <SharedMovieCard movieOrigin={matchCard} styleSheet={ModalMovieCardStyles} />
  )
}

export default ModalMovieCard