import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ModalStyles from './Modal.module.scss';
import { closeModal } from '../../features/matchModalSlice';
import ModalMovieCard from '../../components/ModalMovieCard/ModalMovieCard';
import { renderMatchedMovies } from '../../features/userTwoSlice';
import Button from '../../components/Button/Button';


const Modal = () => {
    const { matchedMovies } = useSelector((state) => state.userTwo);
    const { nameOne} = useSelector((state) => state.params);
    const dispatch = useDispatch();
    
    
    const matchCard = matchedMovies[matchedMovies.length - 1];
    console.log(matchCard)

    const handleClose = () => dispatch(closeModal());

    const handleEndTurn = () => {
        dispatch(renderMatchedMovies());
        dispatch(closeModal());
    }

    
  return (
    <aside className={ModalStyles.container}>
        <div className={ModalStyles.modal}>
            <div className={ModalStyles.header}>
                <h1>A Match!</h1>
            </div>
            <div className={ModalStyles.subheader}>
                <p>You and {nameOne} both liked {matchCard.title}! </p>
                <p> You can watch this movie together or keep looking to see what other movies you both want to watch.</p>
            </div>
            <div className={ModalStyles.card}>
                <ModalMovieCard />
            </div>
            <div className={ModalStyles.buttons}>
            <Button btnText="Keep Looking"  onClick={handleClose} color='orange'/>
            <Button btnText="End Turn & See Matches"  onClick={handleEndTurn}/>
            </div>
        </div>
    </aside>
  )
}

export default Modal