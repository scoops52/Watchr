import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ModalMovieCardStyles from './ModalMovieCard.module.scss';
import { closeModal } from '../../features/matchModalSlice';
import SharedMovieCard from '../SharedMovieCard/SharedMovieCard';


const ModalMovieCard = () => {
    const { matchedMovies } = useSelector((state) => state.userTwo);
    const { nameOne, nameTwo } = useSelector((state) => state.params);
    const dispatch = useDispatch();
    
    
    const matchCard = matchedMovies[matchedMovies.length - 1];
    

    const handleClose = (e) => {
        dispatch(closeModal())
    }
  return (
    <SharedMovieCard movieOrigin={matchCard} styleSheet={ModalMovieCardStyles} />
        //     <div className={ModalMovieCardStyles.movie}>
        //         <div className={ModalMovieCardStyles.overview}>
        //             <p>{matchCard.overview}</p>
        //         </div>
        //         <div className={ModalMovieCardStyles.poster}>
        //             <img src={`https://image.tmdb.org/t/p/w500/${matchCard.poster_path}`} alt={matchCard.Title} />
        //         </div>
        //         <div className={ModalMovieCardStyles.title}>
        //             {matchCard.release_date && <span>{matchCard.release_date.slice(0,4)}</span>}
        //             <h3>{matchCard.title}</h3>
        //     </div>
        // </div>
  )
}

export default ModalMovieCard