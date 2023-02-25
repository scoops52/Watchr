import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setGenre, submitParams, } from '../features/paramSlice';
import { getRandomMovie, getMovies } from '../features/moviesListSlice';
import { useEffect } from 'react';

const SetParams = () => {
    const { name, genreId, paramsSubmitted } = useSelector((state) => state.params)
   
    const dispatch = useDispatch();
    const selectGenreId = useSelector((state) => state.params.genreId);

    const handleName = (e) => {
        dispatch(setName(e.target.value))
    };
    
    const handleGenre = async (e) => {
       const selectedGenreId = e.target.value;
        await dispatch(setGenre(selectedGenreId));
        dispatch(getMovies(genreId));
       
    };

    const handleParams = () => dispatch(submitParams());

 if (!paramsSubmitted) {
    return (
    <div>
        <form>
            <label htmlFor="">Name</label>
            <input type="text"  onChange={handleName}  />
            <div className='dropdown'>
                <label htmlFor="genreId">Genre</label>
                <select name="genreId" id="" onChange={handleGenre}>
                <option disabled >Genre</option>
                    <option value='28' >Action</option>
                    <option value='12' >Adventure</option>
                    <option value='16' >Animated</option>
                    <option value='35' >Comedy</option>
                    <option value='99' >Documentary</option>
                </select>
            </div>
        </form>
        <button onClick={handleParams}>Get Movies</button>
        <h2>Name: {name}</h2>
        <h2>GenreId: {genreId}</h2>
    </div>
  );
}
return (
    <div>
        <h2>{name}'s Movies:</h2>
    </div>
)

}

export default SetParams