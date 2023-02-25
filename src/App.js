import React from 'react';
import MovieCard from './components/MovieCard'; 
import SetParams from './components/SetParams';
import { useSelector } from 'react-redux';


const App = () => {
    const { paramsSubmitted } = useSelector((state) => state.params)
  return (
    <div>
        <SetParams />
        {paramsSubmitted && <MovieCard />}
        
    </div>
  )
}

export default App