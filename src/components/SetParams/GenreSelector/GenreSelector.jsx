import React from 'react';
import GenreSelectorStyles from './GenreSelector.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGenre } from '../../../features/paramSlice';
import { getMovies } from '../../../features/moviesListSlice';
import { setBackgroundImage } from '../../../features/backgroundSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater, faGhost, faHeart, faVideoCamera, faPeopleRoof, faRocket, faExplosion, faWandSparkles, faChevronUp, faChevronDown, } from '@fortawesome/free-solid-svg-icons';


const GenreSelector = () => {
    const [selectedGenre, setSelectedGenre] = useState('Select a Genre');
    const [isDropdown, setIsDropdown] = useState(false);

    const { genreId } = useSelector((state) => state.params)
    // const { selectedGenreId } = useSelector((state) => state.params.genreId)
    const dispatch = useDispatch();

    const handleDropdown = (e) => {
        setIsDropdown(!isDropdown);
    };

    const selectGenre = async (e) => {
        setSelectedGenre(e.target.textContent);
        setIsDropdown(false);
        const selectedGenreId = e.target.dataset.value;
        await dispatch(setGenre(selectedGenreId));
        dispatch(getMovies(genreId));
        dispatch(setBackgroundImage(selectedGenreId));
    };

    // const getBackgroundImageUrl = (genreId) => {
    //     return `url(/assets/${genreId}.jpg)`
    // }
    

    


    return (
        <div className={GenreSelectorStyles.container}>
            <div className={`${GenreSelectorStyles.selectedGenre} ${isDropdown ? GenreSelectorStyles.selecting : ''}`} onClick={handleDropdown}>
                {selectedGenre}
                <div className={GenreSelectorStyles.chevrons}>
                    <FontAwesomeIcon icon={faChevronUp} className={GenreSelectorStyles.chevrons} />
                    <FontAwesomeIcon icon={faChevronDown} className={GenreSelectorStyles.chevrons} />
                </div>
            </div>
            {isDropdown &&
                <div className={GenreSelectorStyles.dropdownOptions}>
                    <div className={GenreSelectorStyles.action} data-value={28} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faExplosion} className={GenreSelectorStyles.actionIcon} />
                        Action
                    </div>
                    <div className={GenreSelectorStyles.comedy} data-value={35} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faMasksTheater} className={GenreSelectorStyles.comedyIcon} />
                        Comedy
                    </div>
                    <div className={GenreSelectorStyles.documentary} data-value={99} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faVideoCamera} className={GenreSelectorStyles.documentaryIcon} />
                        Documentary
                    </div>
                    <div className={GenreSelectorStyles.family} data-value={10751} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faPeopleRoof} className={GenreSelectorStyles.familyIcon} />
                        Family
                    </div>
                    <div className={GenreSelectorStyles.fantasy} data-value={14} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faWandSparkles} className={GenreSelectorStyles.fantasyIcon} />
                        Fantasy
                    </div>
                    <div className={GenreSelectorStyles.horror} data-value={27} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faGhost} className={GenreSelectorStyles.horrorIcon} />
                        Horror
                    </div>
                    <div className={GenreSelectorStyles.romance} data-value={10749} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faHeart} className={GenreSelectorStyles.romanceIcon} />
                        Romance
                    </div>
                    <div className={GenreSelectorStyles.scienceFiction} data-value={878} onClick={selectGenre}>
                        <FontAwesomeIcon icon={faRocket} className={GenreSelectorStyles.scienceFitctionIcon} />
                        Science Fiction
                    </div>
                </div>
            }
        </div>
    )
}

export default GenreSelector