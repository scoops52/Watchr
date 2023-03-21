import React from 'react';
import { useDispatch } from 'react-redux';
import { resetBackground } from '../../features/backgroundSlice';
import { resetMovies } from '../../features/moviesListSlice';
import { resetParams } from '../../features/paramSlice';
import { resetUserTwo } from '../../features/userTwoSlice';
import Button from '../Button/Button';

const ResetButton = () => {
   const dispatch = useDispatch()

   const handleReset = () => {
    dispatch(resetBackground());
    dispatch(resetMovies());
    dispatch(resetParams());
    dispatch(resetUserTwo());
   }
  return (
    <div>
        <Button btnText='Start Over' onClick={handleReset} color='#9b0000' />
    </div>
  )
}

export default ResetButton