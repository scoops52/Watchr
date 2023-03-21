import React from 'react';
import SetParamsStyles from './SetParams.module.scss';
import { useDispatch } from 'react-redux';
import { setNameOne, setNameTwo, submitParams, } from '../../features/paramSlice';
import { toggleRoundOne } from '../../features/moviesListSlice';
import GenreSelector from './GenreSelector/GenreSelector';
import Button from '../Button/Button';




const SetParams = () => {
  const dispatch = useDispatch();

  const handleNameOne = (e) => {
    dispatch(setNameOne(e.target.value))
  };

  const handleNameTwo = (e) => {
    dispatch(setNameTwo(e.target.value))
  }


  
  const handleGetMovies = () => {
    dispatch(submitParams())
    dispatch(toggleRoundOne());
  }


  return (
    <div className={SetParamsStyles.container}>
      <div className={SetParamsStyles.title}>
          <h1 className={SetParamsStyles.heading}>Get Started</h1>
          <p className={SetParamsStyles.subHeading}>Follow the instructions on your left. </p>
      </div>
      
      <div className={SetParamsStyles.names}>
        <label htmlFor="">Partner One's Name:</label>
        <input type="text" onChange={handleNameOne} />
        <label htmlFor="">Partner Two's Name:</label>
        <input type="text" onChange={handleNameTwo} />
      </div>
      <div className={SetParamsStyles.genreSelector}>
        <GenreSelector />
      </div>
      <Button btnText='Get Movies' onClick={handleGetMovies} />
    </div>
  );
}

export default SetParams
