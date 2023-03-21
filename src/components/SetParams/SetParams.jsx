import React from 'react';
import SetParamsStyles from './SetParams.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setNameOne, setNameTwo, setGenre, submitParams, } from '../../features/paramSlice';
import { getRandomMovie, getMovies, toggleRoundOne } from '../../features/moviesListSlice';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater, faGhost, faHeart, faVideoCamera, faPeopleRoof, faRocket, faExplosion, faWandSparkles, faChevronUp, faChevronDown, } from '@fortawesome/free-solid-svg-icons';
import GenreSelector from './GenreSelector/GenreSelector';
import Button from '../Button/Button';




const SetParams = () => {
  const { nameOne, nameTwo, genreId, paramsSubmitted } = useSelector((state) => state.params)


  const dispatch = useDispatch();
  const selectGenreId = useSelector((state) => state.params.genreId);

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
      {/* <button onClick={handleParams}  className={SetParamsStyles.btn}>Get Movies</button> */}
    </div>
  );
}

export default SetParams




{/* <div className="dropdown">
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
              <div id='options'>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={28} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="action" />
                  <FontAwesomeIcon icon={faExplosion} className="i action" />
                  <span className="label">Action</span>
                  <span className="opt-val">Action</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={35} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="comedy" />
                  <FontAwesomeIcon icon={faMasksTheater} className="i comedy" />
                  <span className="label">Comedy</span>
                  <span className="opt-val">Comedy</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={99} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="documentary" />
                  <FontAwesomeIcon icon={faVideoCamera} className="i documentary" />
                  <span className="label">Documentary</span>
                  <span className="opt-val">Documentary</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={10751} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="family" />
                  <FontAwesomeIcon icon={faPeopleRoof} className="i family" />
                  <span className="label">Family</span>
                  <span className="opt-val">Family</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={14} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="fantasy" />
                  <FontAwesomeIcon icon={faWandSparkles} className="i fantasy" />
                  <span className="label">Fantasy</span>
                  <span className="opt-val">Fantasy</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={27} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="horror" />
                  <FontAwesomeIcon icon={faGhost} className="i horror" />
                  <span className="label">Horror</span>
                  <span className="opt-val">Horror</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={10749} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="romance" />
                  <FontAwesomeIcon icon={faHeart} className="i romance" />
                  <span className="label">Romance</span>
                  <span className="opt-val">Romance</span>
                </div>
                <div className="option">
                  <input className="s-c top" type="radio" name="platform" data-value={878} onClick={handleGenre} />
                  <input className="s-c bottom" type="radio" name="platform" defaultValue="sci-fi" />
                  <FontAwesomeIcon icon={faRocket} className="i sci-fi" />
                  <span className="label">Science Fiction</span>
                  <span className="opt-val">Science Fiction</span>
                </div>
                <div id="option-bg" />
              </div>
            </div>
          </form>

        </div> */}