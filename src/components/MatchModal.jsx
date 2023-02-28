import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/matchModalSlice';


const MatchModal = () => {
    const { matchedMovies } = useSelector((state) => state.userTwo);
    const { nameOne, nameTwo } = useSelector((state) => state.params);
    const dispatch = useDispatch();
    
    
    const matchCard = matchedMovies[matchedMovies.length - 1];
    console.log(matchCard)

    const handleClose = (e) => {
        dispatch(closeModal())
    }
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <div className='modal-text'>
                <h3>A Match!</h3>
                <h4>You and {nameOne} both liked {matchCard.title} </h4>
            </div>
            <div className='btn-container'>
                <button className='btn watch-btn'>Watch This Movie</button>
                <button className='btn close-btn' onClick={handleClose}>Keep Looking</button>
            </div>
            <div className="movie match-card">
                <div>
                    <p>{matchCard.overview}</p>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${matchCard.poster_path}`} alt={matchCard.Title} />
                </div>
                <div>
                    {matchCard.release_date && <span>{matchCard.release_date.slice(0,4)}</span>}
                    <h3>{matchCard.title}</h3>
            </div>
        </div>
        </div>
    </aside>
  )
}

export default MatchModal