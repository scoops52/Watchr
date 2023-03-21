import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import RoundOneStyles from './RoundOne.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import background from '../../assets/878.jpg';
import { toggleRoundOne } from '../../features/moviesListSlice';
import Button from '../../components/Button/Button';
import { openWarningModal } from '../../features/warningModalSlice';


const RoundOne = () => {
    const { nameOne } = useSelector((state) => state.params);
    const { backgroundImage } = useSelector((state) => state.background.backgroundImage);
    const { movies } = useSelector((state) => state.moviesList);
    const { likedMovies } = useSelector((state) => state.userTwo)
    const dispatch = useDispatch();

    const handleEndTurn = () => {
       if (likedMovies.length > 0) {
        dispatch(toggleRoundOne());
       } else {
         dispatch(openWarningModal())
       }
    }

    return (

        <div className={RoundOneStyles.container}>
            <div className={RoundOneStyles.card}>
                <h1 className={RoundOneStyles.name}>
                    {nameOne}'s turn
                </h1>
                {movies.length > 0 &&
                    <div className={RoundOneStyles.movieCardContianer}>
                        <MovieCard />
                    </div>}
                {movies.length === 0 &&
                    <h3>No More Movies</h3>
                }
                <div className={RoundOneStyles.endBtn}>
                    <Button btnText="End Turn" onClick={handleEndTurn} />
                </div>
            </div>

        </div>
    )
}


export default RoundOne