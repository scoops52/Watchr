import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNameOne, setNameTwo, setGenre, submitParams, } from '../features/paramSlice';
import { getRandomMovie, getMovies } from '../features/moviesListSlice';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater, faGhost, faHeart, faVideoCamera, faPeopleRoof, faRocket, faExplosion, faWandSparkles, faChevronUp, faChevronDown, } from '@fortawesome/free-solid-svg-icons';




const SetParams = () => {
    const { nameOne, nameTwo, genreId, paramsSubmitted } = useSelector((state) => state.params)
    const [selectedGenreId, setSelectedGenreId] = useState('')
   
    const dispatch = useDispatch();
    const selectGenreId = useSelector((state) => state.params.genreId);

    const handleName = (e) => {
        dispatch(setNameOne(e.target.value))
    };
    
    const handleGenre = async (e) => {
       
        const selectedGenreId = e.target.dataset.value;
        await dispatch(setGenre(selectedGenreId));
        dispatch(getMovies(genreId));
       
    };

    

    const handleParams = () => dispatch(submitParams());

 if (!paramsSubmitted) {
    return (
    <div className='param-container'>
            <label htmlFor="">Name</label>
            <input type="text"  onChange={handleName}  />
            <div className="dropdown">
                {/* <select name="genreId" id="" onChange={handleGenre}>
                    <option selected disabled>Choose a Genre</option>
                    <option value='28' >Action</option>
                    <option value='12' >Adventure</option>
                    <option value='16' >Animated</option>
                    <option value='35' >Comedy</option>
                    <option value='99' >Documentary</option>
                </select> */}
                {/* <button className='dropbtn'>{selectedGenre}</button>
                <div className='dropdown-content'>
                    <a href="#" data-value="28" onClick={handleGenre}>Action</a>
                    <a href="#" data-value="12" onClick={handleGenre}>Adventure</a>
                    <a href="#" data-value="16" onClick={handleGenre}>Animated</a>
                    <a href="#" data-value="35" onClick={handleGenre}>Comedy</a>
                    <a href="#" data-value="99" onClick={handleGenre}>Documentary</a>
                </div> */}
                <form id="app-cover">
  <div id="select-box">
    <input type="checkbox" id="options-view-button" />
    <div id="select-button" className="brd">
      <div id="selected-value">
        <span>Select a Genre</span>
      </div>
      <div id="chevrons">
        <FontAwesomeIcon icon={faChevronUp} className="fas fa-chevron-up i" />
        <FontAwesomeIcon icon={faChevronDown} className="fas fa-chevron-down i" />
      </div>
    </div>
    <div id="options">
      <div className="option">
        <input className="s-c top" type="radio" name="platform" data-value={28} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="action" />
        <FontAwesomeIcon icon={faExplosion} className="i action"/>
        <span className="label">Action</span>
        <span className="opt-val">Action</span>
      </div>
      <div className="option">
      <input className="s-c top" type="radio" name="platform" data-value={35} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="comedy" />
        <FontAwesomeIcon icon={faMasksTheater} className="i comedy"/>
        <span className="label">Comedy</span>
        <span className="opt-val">Comedy</span>
      </div>
      <div className="option">
        <input className="s-c top" type="radio" name="platform" data-value={99} onClick={handleGenre}/>
        <input className="s-c bottom" type="radio" name="platform" defaultValue="documentary" />
        <FontAwesomeIcon icon={faVideoCamera} className="i documentary"/>
        <span className="label">Documentary</span>
        <span className="opt-val">Documentary</span>
      </div>
      <div className="option">
      <input className="s-c top" type="radio" name="platform" data-value={10751} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="family" />
        <FontAwesomeIcon icon={faPeopleRoof} className="i family"/>
        <span className="label">Family</span>
        <span className="opt-val">Family</span>
      </div>
      <div className="option">
      <input className="s-c top" type="radio" name="platform" data-value={14} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="fantasy" />
        <FontAwesomeIcon icon={faWandSparkles} className="i fantasy"/>
        <span className="label">Fantasy</span>
        <span className="opt-val">Fantasy</span>
      </div>
      <div className="option">
      <input className="s-c top" type="radio" name="platform" data-value={27} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="horror" />
        <FontAwesomeIcon icon={faGhost} className="i horror"/>
        <span className="label">Horror</span>
        <span className="opt-val">Horror</span>
      </div>
      <div className="option">
      <input className="s-c top" type="radio" name="platform" data-value={10749} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="romance" />
        <FontAwesomeIcon icon={faHeart} className="i romance"/>
        <span className="label">Romance</span>
        <span className="opt-val">Romance</span>
      </div>
      <div className="option">
      <input className="s-c top" type="radio" name="platform" data-value={878} onClick={handleGenre} />
        <input className="s-c bottom" type="radio" name="platform" defaultValue="sci-fi" />
        <FontAwesomeIcon icon={faRocket} className="i sci-fi"/>
        <span className="label">Science Fiction</span>
        <span className="opt-val">Science Fiction</span>
      </div>
      <div id="option-bg" />
    </div>
  </div>
</form>

            </div>
        <button onClick={handleParams}>Get Movies</button>
        <h2>Name: {nameOne}</h2>
        
    </div>
  );
}
return (
    <div>
        <h2>{nameOne}'s Movies:</h2>
    </div>
)

}

export default SetParams