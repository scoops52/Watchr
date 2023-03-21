import React from 'react';
import AppStyles from './App.module.scss';
import MovieCard from '../components/MovieCard/MovieCard';
import SetParams from '../components/SetParams/SetParams';
import UserTwo from '../components/UserTwo/UserTwo';
import MatchModal from '../components/ModalMovieCard/ModalMovieCard';
import { useSelector } from 'react-redux';
import Start from '../Pages/Start/Start';
import RoundOne from '../Pages/RoundOne/RoundOne';
import moviesListSlice from '../features/moviesListSlice';
import Halftime from '../Pages/Halftime/Halftime';
import RoundTwo from '../Pages/RoundTwo/RoundTwo';
import MatchedMovieCards from '../components/MatchedMovieCards/MatchedMovieCards';
import MatchedMovies from '../Pages/MatchedMovies/MatchedMovies';
import Modal from '../Pages/Modal/Modal';
import { render } from '@testing-library/react';
import ResetButton from '../components/ResetButton/ResetButton';
import WarningModal from '../components/WarningModal/WarningModal';



const App = () => {
  const { movies, renderRoundOne } = useSelector((state) => state.moviesList);
  const { paramsSubmitted } = useSelector((state) => state.params);
  // const { userOneSubmitted } = useSelector((state) => state.moviesList)
  const { isUserTwoRendered, isMatchedMoviesRendered } = useSelector((state) => state.userTwo);
  const { isOpen } = useSelector((state) => state.matchModal);
  const { backgroundImage } = useSelector((state) => state.background);
  const { warningModalOpen } = useSelector((state) => state.warningModal);

  return (
    <div
      className={AppStyles.container}
      style={
        {
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
          transition: '0.5s ease-in-out',
        }


      }
    >
      {isOpen && <Modal />}
      {warningModalOpen && <WarningModal />}
      {!paramsSubmitted && <Start />}
      {renderRoundOne && !isUserTwoRendered && <RoundOne />}
      {paramsSubmitted && !renderRoundOne && !isUserTwoRendered && <Halftime />}
      {isUserTwoRendered && !isMatchedMoviesRendered && <RoundTwo />}
      {isMatchedMoviesRendered && <MatchedMovies />}
      <div className={AppStyles.resetBtn}>
        {paramsSubmitted && !isMatchedMoviesRendered && <ResetButton />}
      </div>
    </div>
  )
}

export default App