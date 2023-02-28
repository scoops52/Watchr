import React from 'react';
import MovieCard from './components/MovieCard'; 
import SetParams from './components/SetParams';
import UserTwo from './components/UserTwo';
import MatchModal from './components/MatchModal';
import { useSelector } from 'react-redux';


const App = () => {
    const { paramsSubmitted } = useSelector((state) => state.params);
    // const { userOneSubmitted } = useSelector((state) => state.moviesList)
    const { isUserTwoRendered } = useSelector((state) => state.userTwo)
    const { isOpen } = useSelector((state) => state.matchModal)
  return (
    <div>
        {isOpen && <MatchModal />}
        <SetParams />
        {paramsSubmitted && !isUserTwoRendered && <MovieCard />}
        {isUserTwoRendered && <UserTwo />}

    </div>
  )
}

export default App